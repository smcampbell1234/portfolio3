import React from 'react';
import ProjectItem from './ProjectItem.js';
import { projects } from '../data/projectsData'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <React.Fragment>
      <div id="projects" className="section-header-wrapper">
        <div className="section-header">Projects</div>
        <div className="section-subheader">
          {/*Feature projects demonstrate coding skills.*/}
           <a href={"https://github.com/smcampbell1234/furniture-e-commerce-store-"} target="_blank">
             E-Commerce Store GitHub Code
           </a>
        </div>
      </div>
      <div id="projects-section" className="projects-section-container">
        {
          projects.map((proj,idx) => {
            let uniqueId = proj.id
            if (!proj.show){
              return null
            }
            let internalPath = !!proj.titlepath ? proj.titlepath : "";
            let externalHref = !!proj.titlehref ? proj.titlehref : "";
            if (!!internalPath){
              return (
                <Link to={`project/${proj.id}`} key={proj.id}>
                  <ProjectItem proj={proj} idx={idx} uniqueId={uniqueId} />
                </Link>
              )
            } else {
              return (
                <a href={externalHref} target="_blank" key={idx}>
                 <ProjectItem proj={proj} idx={idx} uniqueId={uniqueId} />
                </a>
              )
            }
          })
        }

      </div>

    </React.Fragment>
  )
}

export default Projects;