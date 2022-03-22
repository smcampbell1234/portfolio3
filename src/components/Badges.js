import React from 'react';
import { badges } from '../data/badgeData'
import { badge_images } from '../images/skills'

const Badges = () => {

  return (
    <React.Fragment>
      <div id="badges" className="section-header-wrapper">
        <div className="section-header">Badges</div>
        <div className="section-subheader">Badges based on time, taskS, achievementS, and competencies. </div>
      </div>
      <div className="badge-section-wrapper">
        <div className="container">
        {
          badges.map(badge => {
            const {image} = badge
            return (
              <div className="badge-wrapper">
                <div className="badge-img-wrapper">
                  <img src={badge_images[image]}/>
                </div>
                {badge.data.map(item => {
                    return (
                      <div className="badge-txt">{item}</div>
                    )
                  }
                  )}
              </div>
            )
          })
        }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Badges;