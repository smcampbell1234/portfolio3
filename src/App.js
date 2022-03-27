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
import DemoDetail from './components/DemoDetail'

function App() {
  const [isTradMode,setIsTradMode] = useState(false)
  const [demoId,setDemoId] = useState(null)

  let isDetail = demoId;

  // clear details pages - for back button
  const clearDetails = () => {
    setDemoId(null)
  }

  // return <DemoDetail demoId={201} setDemoId={setDemoId} />
  if (demoId) return <DemoDetail demoId={demoId} setDemoId={setDemoId} clearDetails={clearDetails} />

  return (
    <>
      <Navbar isTradMode={isTradMode} setIsTradMode={setIsTradMode} isDetail={isDetail}/>
      {/*<div style={{height:"100px"}} />*/}
      <Intro isTradMode={isTradMode} />
      <Projects />
      <Demo setDemoId={setDemoId} clearDetails={clearDetails} />
      <Badges />
      <Skills />
      {/*<Dummy />*/}
      <Contact />
      <Footer />
    </>
  )
}

export default App
