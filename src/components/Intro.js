import React from 'react'

const Intro = (props) => {
  const {isTradMode} = props;

  let intro_photo = isTradMode ?
    "https://drive.google.com/uc?export=view&id=1fgsIFRbUxrR6j0puc1gZDo-T7ertuPPy" // coder
    :
    "https://drive.google.com/uc?export=view&id=17HtbxYb78V1E3XS7NacPLDf904vVefA5"; // space man


  return (
    <div id="intro-section" className="intro-section-holder">
      <div className="intro-image-holder">
        <img src={intro_photo} alt="intro image"  />
      </div>

      <div style={{display:"none"}}>
         <img src="https://drive.google.com/uc?export=view&id=1fgsIFRbUxrR6j0puc1gZDo-T7ertuPPy" alt="1"/>
          <img src="https://drive.google.com/uc?export=view&id=17HtbxYb78V1E3XS7NacPLDf904vVefA5" alt="2"/>
        </div>

      <div className="intro-space-holder">

      </div>

      <div className="intro-text-holder">
        <h3 className="intro-header">Full Stack Developer</h3>
        {
          !isTradMode &&
          <h4><i>
            Writes golden code, develops features, stomps bugs.
          </i></h4>
        }
        <div>
          <p>
            Thank you for visiting my portfolio. Below are some of my recent projects and pieces of work.
            Even this portfolio, itself, demonstrates some of my latest ReactJS code. If you would like to see the actual code, there is a link in the navbar
            above. There is also a link to my e-commerce store in the Projects Section header.
            <br/>
            <br/>
            The artifacts found below were collected from my professional work, personal creations, and class projects.
            I have also included a comprehensive list of skills, my resume, skill badges, and an about section.
            Please feel free to reach out to me if you have any questions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro;

