import React, {useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoDetail from './components/DemoDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ProjectDetails from './components/ProjectDetails'

function App() {
  const [isTradMode,setIsTradMode] = useState(true) // is traditional mode, changed by mode toggle
  const [windowDimensions,setWindowDimensions] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    mediaQuery1: 810, // impacts mode toggle and skill table responsive design
  })

  const detectSize = () => {
    setWindowDimensions({
      ...windowDimensions,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  useEffect(()=>{
    window.addEventListener('resize',detectSize)
    return () => {
      window.removeEventListener('resize',detectSize)
    }
  }, [windowDimensions])

  return (
    <React.Fragment>
        <Router>
          <Navbar isTradMode={isTradMode} setIsTradMode={setIsTradMode} windowDimensions={windowDimensions} />
          <Routes>
            <Route path='/' element={<Home isTradMode={isTradMode} windowDimensions={windowDimensions} />} />
            <Route path='demo/:demoId' element={<DemoDetail />} />
            <Route path='project/:projectId' element={<ProjectDetails />} />
          </Routes>
          <Footer />
        </Router>
    </React.Fragment>
  )
}

export default App
