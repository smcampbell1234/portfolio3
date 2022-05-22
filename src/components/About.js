import React from 'react'
import {about_images} from '../images/skills.js'

const About = () => {
  const headshot = about_images.headshot;
  return (
    <React.Fragment>
      <div id="about" className="section-header-wrapper">
        <div className="section-header">About</div>
      </div>
      <div className="about-container">
        <div className="about-left">
          <img src={headshot} alt="headshot" />
        </div>
        <div className="about-right">
         <p>
           I have a BS in Biology, 38 units toward associates in Computer Science and Web Development, along with education in journalism and teaching.
           Taken together, this makes me a strange brew of science, engineering, and communication, and a strong member for any team I am a part of.
         </p>

          <p>
            I have worked as a researcher, journalist, teacher, and my homemade apps have followed all my professions.
            In the lab, for example, I gamified chemical dilutions into the 'Dilution Derby', a horse race based off daily data.
            I also wrote an aliquoting caculator to streamline a lab technique.
            As a teacher, I created 'Aide Plus,' to help classroom aides document their activities, which helped students and prevented lawsuits.
          </p>

          <p>
            I consider myself a self-taught developer who then went back to school to perfect his passion.
            I was lucky enough to find a position in the software engineering field and gain two years of experience, mostly working in the front-end but also working across a FReMP full stack.
            People who have worked with me will tell you my code is sound and readable.
            They will also tell you I have a strong commitment to communication and teamwork.
          </p>

          {/*<p>*/}
          {/*  I play the violin, have a strong penchant for McRib Sandwiches (2-years free), and will likely flip my hat like Stallone in the 80's masterpiece 'Over The Top'.*/}
          {/*</p>*/}
        </div>
      </div>
    </React.Fragment>
  )
}

export default About;