import Home from './components/home/Home'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import { useState, useEffect } from 'react';


function App() {

  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    }
  }, []);
  return (
    <>
      <Home setActiveNav={setActiveNav} />
      <About setActiveNav={setActiveNav} />
      <Skills setActiveNav={setActiveNav} />
      <Services setActiveNav={setActiveNav} />
      <Projects setActiveNav={setActiveNav} />
      <Contact setActiveNav={setActiveNav} />
      <Footer setActiveNav={setActiveNav} />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />


    </>
  )
}

export default App
