import React from 'react';
import Intro from './Intro'
import Projects from './Projects'
import Demo from './Demo'
import Badges from './Badges'
import Skills from './Skills'
import Contact from './Contact'
import About from './About'
import Fade from 'react-reveal/Fade'

const Home = (props) => {
  const {isTradMode,windowDimensions} = props
  return (
    <React.Fragment>
      <Intro isTradMode={isTradMode} />
      <Projects />
      {/*<Fade bottom>*/}
        <Demo />
        <Badges />
        <Skills windowDimensions={windowDimensions} />
        <About />
        <Contact />
      {/*</Fade>*/}
    </React.Fragment>
  )
}

export default Home;