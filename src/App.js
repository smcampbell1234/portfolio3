import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DemoDetail from './components/DemoDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [isTradMode,setIsTradMode] = useState(true)
  const [demoId,setDemoId] = useState(null)

  let isDetail = demoId;

  // clear details pages - for back button
  const clearDetails = () => {
    setDemoId(null)
  }

  // return <DemoDetail demoId={201} setDemoId={setDemoId} />
  // if (demoId) return <DemoDetail demoId={demoId} setDemoId={setDemoId} clearDetails={clearDetails} />

  return (
    <React.Fragment>
      <Navbar isTradMode={isTradMode} setIsTradMode={setIsTradMode} isDetail={isDetail}/>
        <Router>
          <Routes>
            <Route path='/' element={<Home setDemoId={setDemoId} clearDetails={clearDetails} isTradMode={isTradMode}/>} />
            <Route path='demo/:demoId' element={<DemoDetail setDemoId={setDemoId} clearDetails={clearDetails} />} />
          </Routes>
        </Router>
      <Footer />
    </React.Fragment>
  )
}

export default App
