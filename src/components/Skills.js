import React, {useState} from 'react';
import { skills } from '../data/skillsData'
import { frequency_imgs, filter_arrow, categories } from '../images/skills'
import { FiRefreshCcw } from 'react-icons/fi';

/***** proficiency color map *****/
const getProficiencyColor = (score) => {
  if (score < 25) return "#6EBEF7" // alt - red
  else if (score < 50) return "#49A6E9" // alt - #ff7900
  else if (score < 75) return "#2D87C8" // alt - #F5E950
  else if (score <= 100) return "#104E7A" // alt - #00c500
}

const Skills = (props) => {
  const {windowWidth, mediaQuery1} = props.windowDimensions;
  // **************** state ****************
  const [sort,setSort] = useState({
    skill: 0,
    category: 0,
    proficiency: 0,
    frequency: 0,
  })
  const [filterList,setFilterList] = useState([])
  const [selectedSkills,setSelectedSkills] = useState([])
  const [showDetails,setShowDetails] = useState(false)
  const [rowCount,setRowCount] = useState(10)

  const showDetailTxt = windowWidth > mediaQuery1 ? "show details" : "details";
  const hideDetailTxt = windowWidth > mediaQuery1 ? "hide details" : "hide";

  // **************** handlers ****************
  // toggle sort arrows for correct column: @arg string name of column
  const handleSortArrow = (which) => {
    let newSort = {...sort}
    let newIndex = sort[which] + 1;
    // loop index back to zero if needed
    newIndex = (filter_arrow.length - newIndex) !== 0 ? newIndex : 0;
    // clear all filters
    newSort.skill = 0;
    newSort.category = 0;
    newSort.proficiency = 0;
    newSort.frequency = 0;
    // update proper sort
    newSort[which] = newIndex;
    setSort(newSort)
  }

  const toggleSkillItem = (id) => {
    if (selectedSkills.includes(id)) {
      // remove
      let newSelectedSkills = selectedSkills.filter(skillId => {
        return skillId !== id
      })
      setSelectedSkills(newSelectedSkills)
    }
    else {
      // add
      let newSelectedSkills = [...selectedSkills]
      newSelectedSkills.push(id)
      setSelectedSkills(newSelectedSkills)
    }
  }

  const handleFilter = (filter) => {
    let newFilterList;
    if (!filterList.includes(filter)) {
      // add
      filterList.push(filter)
      newFilterList = [...filterList]
    } else {
      // remove
      newFilterList = filterList.filter(item => item != filter)
    }
    setFilterList(newFilterList)
  }

  const handleRefresh = () => {
    //clear all filters and sorts
    setSort({
      skill: 0,
      category: 0,
      proficiency: 0,
      frequency: 0,
    })
    setFilterList([])
  }


  // **************** filter/sort list ****************
  let filterOptions = []
    skills.forEach(skill => {
      if(!filterOptions.includes(skill.category))
        filterOptions.push(skill.category)
    })

  // filter skill list
  let filteredSkills = []
  if (filterList.length > 0) {
    skills.forEach(skill => {
      if(filterList.includes(skill.category)) {
        filteredSkills.push(skill)
      }
    })
  } else {
    filteredSkills = [...skills]
  }

  // sort filtered skill list
  let sortedSkills = [...filteredSkills]
  // all sorting arrows are traditional, but opposite for proficiency column
  Object.keys(sort).forEach(col => {
    if (sort[col] === 1)
      sortedSkills.sort((a,b) => {
        if (col === 'proficiency')
          return a[col] < b[col] ? 1 : -1
        else
          return a[col] > b[col] ? 1 : -1
      })
    else if (sort[col] === 2)
      sortedSkills.sort((a,b) => {
        if (col === 'proficiency')
          return a[col] > b[col] ? 1 : -1
        else
          return a[col] < b[col] ? 1 : -1
      })
  })

  // Show only proper count
  let skillList = rowCount !== 99 ? sortedSkills.slice(0,rowCount) : sortedSkills;

  return (
    <React.Fragment>
      <div id="skills" className="section-header-wrapper">
        <div className="section-header">Skills</div>
        <div className="section-subheader">Hard skills that can be filtered by category.</div>
      </div>
      <div className="skills-table-outer-wrapper">
        <div className="skills-filter-bar-wrapper">
          <div className="skills-refresh-wrapper" >
            <div className="skills-refresh" onClick={handleRefresh}>
              <div className="skills-refresh-text">Refresh</div>
              <div className="skills-refresh-icon"><FiRefreshCcw /></div>
            </div>
          </div>
          <div className="skills-show-details-btn">
            <div className="skills-show-details-btn-txt" onClick={() => {setShowDetails(!showDetails); setSelectedSkills([]);}}>
              {
                showDetails ? hideDetailTxt : showDetailTxt
              }
            </div>
          </div>
          <div className="skills-filter-options-wrapper">
            {filterOptions.map((filter) => {
              let isSelected = filterList.includes(filter) ? "skill-row-gray" : null;
              return (
                <div
                  key={filter}
                  className={`skills-filter-option ${isSelected}`}
                  onClick={() => handleFilter(filter)}
                >
                  {filter}
                </div>
              )
            })}
          </div>
        </div>
        <ul id="skills-datatable" className="skills-datatable-container">
          <li className="skills-header-row">
            <div className="skills-row-item">
              Skill
              <div className="skills-sort-arrows" onClick={()=>handleSortArrow("skill")}>
                <img src={filter_arrow[sort.skill]} height="18px" width="15px" alt="header logo"/>
              </div>
            </div>

            {
              windowWidth > mediaQuery1 &&
              <div className="skills-see-detail"/>
            }
            {
              windowWidth > mediaQuery1 &&
              <div className="skills-row-item">
                Category
                <div className="skills-sort-arrows skill-header-category-arrows"
                     onClick={() => handleSortArrow("category")}>
                  <img src={filter_arrow[sort.category]} height="18px" width="15px" alt="header logo"/>
                </div>
              </div>
            }
            <div className="skills-row-item">
              Proficiency*
              <div className="skills-sort-arrows" onClick={()=>handleSortArrow("proficiency")}>
                <img src={filter_arrow[sort.proficiency]} height="18px" width="15px" alt="header logo"/>
              </div>
            </div>
            <div className="skills-row-item">
              Frequency
              <div className="skills-sort-arrows" onClick={()=>handleSortArrow("frequency")}>
                <img src={filter_arrow[sort.frequency]} height="18px" width="15px" alt="header logo"/>
              </div>
            </div>
          </li>
          {
            skillList.map((item,idx) => {
              const {id,skill,category,category_img,proficiency,frequency,detail} = item;
              let colorBarStyle = {
                backgroundColor:getProficiencyColor(proficiency),
                width:proficiency,
                display:"inline-block",
                borderRadius: "0 15px 15px 0"
              }
              return (
                <div
                  className={`skill-row-wrapper ${selectedSkills.includes(id) ? "skill-row-gray" : null}`}
                  onClick={() => toggleSkillItem(id)}
                  key={idx}
                >
                  <li key={id} className="skills-row">
                    <div className="skills-row-item skills-skill-col">
                      <div className="skills-skill-img">
                        <img src={categories[item.skill]} height="30px" width="30px"/>
                      </div>
                      <div className="skills-skill-txt">
                        {skill}
                      </div>
                    </div>

                    {
                      windowWidth > mediaQuery1 &&
                      <div className="skills-row-item see-detail">
                        details
                      </div>
                    }

                    {
                      windowWidth > mediaQuery1 &&
                      <div className="skills-row-item">
                        <div className="skills-category skill-category-col">
                          {item.category}
                        </div>
                      </div>
                    }

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
                  {
                    (selectedSkills.includes(id) || showDetails) &&
                    <div className="skills-row-detail">
                      {detail}
                    </div>
                  }
                </div>
              )
            })
          }
        </ul>
        <div className="skill-pager-wrapper">
          <div className="skills-show-wrapper">
            <div>Show</div>
            <div className={`skills-show-option ${rowCount === 10 ? "option-selected" : null}`} onClick={() => setRowCount(10)}>10</div>
            <div className={`skills-show-option ${rowCount === 25 ? "option-selected" : null}`} onClick={() => setRowCount(25)}>25</div>
            <div className={`skills-show-option ${rowCount === 50 ? "option-selected" : null}`} onClick={() => setRowCount(50)}>50</div>
            <div className={`skills-show-option ${rowCount === 99 ? "option-selected" : null}`} onClick={() => setRowCount(99)}>all</div>
          </div>
          <div>
            {`${skillList.length} of ${sortedSkills.length}`}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Skills;