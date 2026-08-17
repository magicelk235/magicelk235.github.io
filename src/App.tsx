import Nav from './components/Nav';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Apps from './sections/Apps';
import Metal from './sections/Metal';
import Worldspawn from './sections/Worldspawn';
import Smaller from './sections/Smaller';
import About from './sections/About';
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
        <Apps />
        <Metal />
        <Worldspawn />
        <Smaller />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
