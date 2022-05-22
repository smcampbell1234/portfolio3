import React from 'react';

const ProjectItem = (props) => {
  const {proj,idx,uniqueId} = props;
  return (
    <div>
      <div key={idx} id={uniqueId} className="proj-container">
        <div style={{height: "100%"}}>
          <div className="flexible-container flexible-margin-projects">
            <img src={proj.banner} alt={proj.title} className="flexible-image"/>
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
                {
                  proj.button1text &&
                  <div id="proj-details-btn" className="proj-button">
                    {proj.button1text}
                  </div>
                }
                {
                  proj.button2text &&
                  <div id="proj-app-btn" className="proj-button">
                    {proj.button2text}
                  </div>
                }
              </div>
            </div>
            {proj.text}
          </div>
        </div>
        {!!proj.footerlinks && !!proj.footerlinks.length > 0 &&
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
        }
      </div>
    </div>
  )
}

export default ProjectItem;