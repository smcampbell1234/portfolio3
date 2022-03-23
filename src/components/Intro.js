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

      <div className="intro-space-holder">

      </div>

      <div className="intro-text-holder">
        <h3 className="intro-header">Full Stack Developer</h3>
        <i>My name is Sean Campbell and I love to code, design, and see a project grow into a developed life.</i>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et fringilla dui. Proin molestie ex vel
          blandit posuere. Curabitur vel varius tellus, sit amet varius quam. Mauris posuere erat ipsum, at sagittis
          justo consequat vitae. Curabitur imperdiet odio sed magna vehicula dictum. Etiam a vulputate libero. Nam
          at sem eget lorem dapibus lobortis ac sed risus.
        </div>
      </div>
    </div>
  )
}

export default Intro;