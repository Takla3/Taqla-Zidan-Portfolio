import Home from './components/home/Home'
import About from './components/about/About'
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Projects from './components/projects/Projects'
import Services from './components/services/Services'
import Skills from './components/skills/Skills'
import { useState } from 'react';

function App() {

  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <Home setActiveNav={setActiveNav} />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />


    </>
  )
}

export default App
