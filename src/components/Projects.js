import React from 'react';
import { projects } from '../data/projectsData'

const Projects = () => {
  return (
    <React.Fragment>
      <div id="projects" className="section-header">
        Projects
      </div>
      <div id="projects-section" className="projects-section-container">
        {
          projects.map((proj,idx) => {
            let uniqueId = proj.id
            return (
              <div key={idx} id={uniqueId} className="proj-container">
                <div>
                  <div className="proj-header">
                    <img src={proj.banner} alt={proj.title}/>
                  </div>
                  <div id="project-body" className="proj-body">
                    <div className="proj-title">
                      {proj.title}
                    </div>
                    <div id="proj-text">
                      <div className="proj-callout-n-buttons">
                        <div className="proj-callout">
                          <span className="proj-callout-header">{proj.callouttitle}</span>&nbsp;
                          <span>{proj.callouttext}</span>
                        </div>
                        <div id="proj-details-btn" className="proj-button">
                          {proj.button1text}
                        </div>
                        <div id="proj-app-btn" className="proj-button">
                          {proj.button2text}
                        </div>
                      </div>
                    </div>
                    {proj.text}
                  </div>
                </div>
                <div id="project-footer" className="proj-footer-container">
                  {!!proj.footerlinks && proj.footerlinks.map(link => {
                    return (
                      <div className="proj-footer-link">
                        <div className="proj-footer-icon">{link.icon}</div>
                        <div className="proj-footer-anchor"><a href={link.link}>{link.text}</a></div>
                      </div>
                    )
                  })
                  }
                </div>

              </div>
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Projects;