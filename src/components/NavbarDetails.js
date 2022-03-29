import React from 'react'
import { social } from '../data/navData'
import BackButton from './subcomponents/BackButton.js'
import {Link} from "react-router-dom";

const NavbarDetails = (props) => {
  const {clearDetails} = props;

  let header_logo = "https://drive.google.com/uc?export=view&id=1gwwZZuk0hZiOsKA3BwHzRLm2YnU8h_QF"

  return (
    <div className="details-nav">
      <div className="details-nav-center">

        {/*<Link to={`/`} >*/}
        {/*  <div className="details-nav-header" onClick={() => clearDetails()} >*/}
        {/*    <img src={header_logo} height="45px" width="180px" alt="header logo"/>*/}
        {/*  </div>*/}
        {/*</Link>*/}

        <BackButton clearDetails={clearDetails} />

         {/*<ul className="social-icons">*/}
         {/*  {*/}
         {/*    social.map((socialIcon) => {*/}
         {/*      const {id,url,icon} = socialIcon;*/}
         {/*      return (*/}
         {/*        <li key={id} >*/}
         {/*          <a href={url}>{icon}</a>*/}
         {/*       </li>*/}
         {/*     )*/}
         {/*    })*/}
         {/*  }*/}
         {/*</ul>*/}

      </div>
    </div>
  )
}

export default NavbarDetails;
