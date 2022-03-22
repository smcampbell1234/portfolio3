import React from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Dummy from './components/Dummy'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Demo from './components/Demo'
import Badges from './components/Badges'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Badges />
      <Dummy />
      <Demo />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App
