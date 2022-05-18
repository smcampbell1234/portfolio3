import React from 'react';
import { badges } from '../data/badgeData'
import { badge_images } from '../images/skills'

const Badges = () => {

  return (
    <React.Fragment>
      <div id="badges" className="section-header-wrapper">
        <div className="section-header">Badges</div>
        <div className="section-subheader">Badges based on time, tasks, achievements, and competencies. </div>
      </div>
      <div className="badge-section-wrapper">
        <div className="container">
        {
          badges.map((badge,idx) => {
            const {image,percent,percent_show,archive} = badge

            if (!archive) {
              return (
                <div className="badge-wrapper" key={idx}>
                  <div>
                    <div className="badge-img-wrapper">
                      <img src={badge_images[image]}/>
                    </div>
                      {
                        percent_show ?
                        <div className="badge-progress-bar-outer">
                          <div style={{width: percent}} className="badge-progress-bar-inner"/>
                        </div>
                         :
                        <div className="badge-faux-space">&nbsp;</div>
                      }

                  </div>
                  {badge.data.map((item,idx) => {
                      return (
                        <div className="badge-txt" key={idx}>{item}</div>
                      )
                    }
                  )}
                </div>
              )
            }
            return null
          })
        }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Badges;