import React from 'react'
import { social } from '../data/navData'
import BackButton from './subcomponents/BackButton.js'

const NavbarDetails = (props) => {
  const {clearDetails} = props;

  let header_logo = "https://drive.google.com/uc?export=view&id=1gwwZZuk0hZiOsKA3BwHzRLm2YnU8h_QF"

  return (
    <nav className="details-nav">
      <div className="details-nav-center">

        <div className="details-nav-header" onClick={() => clearDetails()} >
          <img src={header_logo} height="45px" width="180px" alt="header logo"/>
        </div>

        <BackButton clearDetails={clearDetails} />

         <ul className="social-icons">
           {
             social.map((socialIcon) => {
               const {id,url,icon} = socialIcon;
               return (
                 <li key={id} >
                   <a href={url}>{icon}</a>
                </li>
              )
             })
           }
         </ul>

      </div>
    </nav>
  )
}

export default NavbarDetails;
