import React, {useState} from 'react'
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
  const [isTradMode,setIsTradMode] = useState(false)
  return (
    <>
      <Navbar isTradMode={isTradMode} setIsTradMode={setIsTradMode}/>
      <Intro isTradMode={isTradMode} />
      <Projects />
      <Demo />
      <Badges />
      <Skills />
      {/*<Dummy />*/}
      <Contact />
      <Footer />
    </>
  )
}

export default App
