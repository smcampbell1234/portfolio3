import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data/navData'

const Navbar = () => {
  const [showLinks,setShowLinks] = useState(false);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  // let header_logo = "https://drive.google.com/uc?export=view&id=15YGcJ6NOMwlU-GTvh6uMqwZt-s-CrRzM";
  let header_logo = "https://drive.google.com/uc?export=view&id=1gwwZZuk0hZiOsKA3BwHzRLm2YnU8h_QF"

  useEffect(() => {
    // check height for links
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log("------ ",linksHeight); // look at DOMRect.height
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  },[showLinks])

  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={header_logo} height="45px" width="180px" alt="header logo"/>
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {
            links.map((link)=> {
              const {id,text} = link;
              return <li key={id}  onClick={() =>  {
                document.getElementById(text).scrollIntoView({behavior: "smooth", block: "start"})
              }}
              >
                <a>{text}</a>
              </li>
            })
          }
        </ul>
      </div>
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
}

export default Navbar;
