import { nav } from './data/nav';
import { useReveal, useScrollSpy } from './lib/hooks';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Architecture } from './components/Architecture';
import { Certifications } from './components/Certifications';
import { Contact, Footer } from './components/Contact';

export default function App() {
  const rootRef = useReveal();
  const active = useScrollSpy(nav.map((n) => n.id));

  return (
    <div ref={rootRef} className="min-h-screen bg-bg font-body text-fg">
      <Navbar active={active} />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Architecture />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
