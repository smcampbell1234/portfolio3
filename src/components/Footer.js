import React from 'react';
import {social} from "../data/navData";

const Footer = () => {
  return(
      <div id="main-footer" className="main-footer-container">
        <div className="main-footer-info">
          seanmc2009@gmail.com<br/>
        </div>
        <div className="main-footer-copyright">
          Copyright 2022 Sean Campbell. All rights reserved.<br/>
        </div>
        <div className="main-footer-details">
          {
            <ul className="footer-social-icons">
              {
                social.map((socialIcon) => {
                  const {id,url,icon} = socialIcon;
                  return (
                    <li key={id} >
                      <a href={url} target="_blank">{icon}</a>
                    </li>
                  )
                })
              }
            </ul>
          }
        </div>
      </div>
    )
}

export default Footer;