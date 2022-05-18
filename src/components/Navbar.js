import React, { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from '../data/navData'
import { Link, useParams, useLocation } from 'react-router-dom'
import BackButton from "./subcomponents/BackButton"

const Navbar = (props) => {
  const {isTradMode, setIsTradMode, windowDimensions} = props;
  const [showLinks,setShowLinks] = useState(false);
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)
  const location = useLocation()
  const [isDemo,setIsDemo] = useState(false)


  // let header_logo = "https://drive.google.com/uc?export=view&id=15YGcJ6NOMwlU-GTvh6uMqwZt-s-CrRzM";
  let header_logo = "https://drive.google.com/uc?export=view&id=1gwwZZuk0hZiOsKA3BwHzRLm2YnU8h_QF"

  useEffect(() => {
    // check height for links
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  },[showLinks])

  useEffect(() => {
    let isDemoScreen = window.location.href.includes("demo")
    setIsDemo(isDemoScreen)
  }, [location])

  return (
    <nav className="nav-container">
      <div className="nav-center">
        <div className="nav-header">
          <Link to={"/"}>
            <img src={header_logo} height="45px" width="180px" alt="header logo"/>
          </Link>
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {
                links.map((link) => {
                  const {id, text} = link;
                  return <li key={id} onClick={() => {
                    document.getElementById(text).scrollIntoView({behavior: "smooth", block: "start"})
                  }}
                  >
                    <a>{text}</a>
                  </li>
                })
              }
            </ul>
          </div>

        { isDemo &&
          <BackButton />
        }

        {
          windowDimensions.windowWidth > windowDimensions.mediaQuery1 &&
          <div>
            <label className="switch">
              <input
                type="checkbox"
                value={isTradMode}
                onChange={() => setIsTradMode(!isTradMode)}
              />
              <span className="slider round"></span>
            </label>
            &nbsp;
            <span style={{color: "#8B0000", fontSize: ".7rem"}}>Do press this button</span>
          </div>
        }

        <ul className="social-icons">
          {
            social.map((socialIcon) => {
              const {id,url,icon} = socialIcon;
              return (
                <li key={id} >
                  <a href={url}  target="_blank">{icon}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
