import React, {useState} from 'react';
import { skills } from '../data/skillsData'
import { frequency_imgs, filter_arrow, categories } from '../images/skills'

/* score is numb */
const getProficiencyColor = (score) => {
  if (score <= 25) return "Red"
  else if (score <= 50) return "#ff7900"
  else if (score <= 75) return "#F5E950"
  else if (score <= 100) return "#00c500"
}

const getProficiencyWidth = (score) => {
  let factor = 1;
  return score * factor;
}

const Skills = () => {
  // State
  const [skillArrow,setSkillArrow] = useState(0)
  const handleFilterArrow = (which) => {
    switch (which) {
      case "skill":
        let nextIndex = filter_arrow.length & skillArrow
        setSkillArrow(nextIndex)
        break;
      case "category":
        break;
      case "proficiency":
        break;
      case "frequency":
        break;
    }
  }

  return (
    <React.Fragment>
      <div id="skills" className="section-header">
        Skills
      </div>
      <ul id="skills-datatable" className="skills-datatable-container">
        <li className="skills-header-row">
          <div className="skills-row-item">
            Skill
            <div className="skills-filter-arrows" onClick={()=>handleFilterArrow("skill")}>
              <img src={filter_arrow[0]} height="18px" width="15px" alt="header logo"/>
            </div>
          </div>
          <div className="skills-row-item">
            Category
            <div className="skills-filter-arrows" onClick={()=>handleFilterArrow("category")}>
              <img src={filter_arrow[0]} height="18px" width="15px" alt="header logo"/>
            </div>
          </div>
          <div className="skills-row-item">
            Proficiency*
            <div className="skills-filter-arrows" onClick={()=>handleFilterArrow("proficiency")}>
              <img src={filter_arrow[0]} height="18px" width="15px" alt="header logo"/>
            </div>
          </div>
          <div className="skills-row-item">
            Frequency
            <div className="skills-filter-arrows" onClick={()=>handleFilterArrow("frequency")}>
              <img src={filter_arrow[0]} height="18px" width="15px" alt="header logo"/>
            </div>
          </div>
        </li>
        {
          skills.map((item,idx) => {
            const {id,skill,category,category_img,proficiency,frequency} = item;
            let colorBarStyle = {
              backgroundColor:getProficiencyColor(proficiency),
              width:proficiency,
              display:"inline-block",
              borderRadius: "0 15px 15px 0"
            }
            return (
                <li key={id} className="skills-row">
                  <div className="skills-row-item skills-skill-col">
                    <div className="skills-skill-img">
                      <img src={categories[item.skill]} height="20px" width="20px"/>
                    </div>
                    <div className="skills-skill-txt">
                      {skill}
                    </div>
                  </div>
                  <div className="skills-row-item">
                    <div className="skills-category">
                      {item.category}
                    </div>
                  </div>
                  <div className="skills-row-item">
                    <div className="skills-proficiency-score">{proficiency}%</div>
                    <div style={colorBarStyle}>&nbsp;</div>
                  </div>
                  <div className="skills-row-item skill-col">
                    <div className="skills-freq-img">
                      <img src={frequency_imgs[frequency]} height="30px" width="30px" alt={`frequency ${frequency}`}/>
                    </div>
                    <div className="skills-freq-txt">
                      {frequency}
                    </div>
                  </div>
                </li>
              )
          })
        }
      </ul>
    </React.Fragment>
  )
}

export default Skills;