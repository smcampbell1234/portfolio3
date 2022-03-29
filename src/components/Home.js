import React from 'react';
import Intro from './Intro'
import Projects from './Projects'
import Demo from './Demo'
import Badges from './Badges'
import Skills from './Skills'
import Contact from './Contact'
import Fade from 'react-reveal/Fade'

const Home = (props) => {
  let {setDemoId, clearDetails,isTradMode} = props
  return (
    <React.Fragment>
      <Intro isTradMode={isTradMode} />
      <Projects />
      <Fade bottom>
        <Demo setDemoId={setDemoId} clearDetails={clearDetails} />
        <Badges />
        <Skills />
        <Contact />
      </Fade>
    </React.Fragment>
  )
}

export default Home;