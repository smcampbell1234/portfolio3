import React from 'react'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Dummy from './components/Dummy'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Demo from './components/Demo'

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Dummy />
      <Demo />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App
