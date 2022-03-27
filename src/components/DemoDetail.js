import React from "react";
import { demos } from '../data/demoData'
import NavbarDetails from './NavbarDetails'
import Footer from './Footer'
import {getDemo} from '../selectors/selectors'
import BackButton from "./subcomponents/BackButton";

const DemoDetail = (props) => {
  const {demoId, setDemoId, clearDetails} = props;

  const demo = getDemo(demoId)

  const clearDemo = () => {
    setDemoId(null)
  }

  /********* Render Helpers **************/
  const renderMedia = (idx) => {
    let {media,media_link,media_embed_link} = demo.details[idx]
    if (media){
      if (media === "video") {
        return (
          <div class="margin-top">
            <div className="flexible-container flexible-margin-demo">
              <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={media_embed_link}></iframe>
            </div>
            <div className="demo-media-link">{media_link}</div>
          </div>
        )
      } else {
        return (
            <div class="margin-top">
              <img src={media_link} alt="Nature" className="flexible-image" width="600" height="400"/>
            </div>
          )
      }
    }
    return null
  }

  const renderTitle = (idx) => {
    let {title,title_align,asside,asside_align} = demo.details[idx]
    return (
      <div>
        <div style={{textAlign: title_align}} className="demo-detail-section-title">{title}</div>
        <div style={{textAlign: asside_align}} className="demo-detail-section-asside">{asside}</div>
      </div>
    )
  }

  let isDetail = demoId;

  return (
    <React.Fragment>
      <NavbarDetails clearDetails={clearDetails} />
      <div className="demo-detail-outer-wrapper">
        <div className="demo-detail-wrapper">
          <h1 className="demo-detail-header">{demo.title}</h1>
          {
            demo.details.map((item,idx) => {
              let {text1,text2,type} = item;
              if (type === "text-wide-bottom") {
                return (
                  <div>
                    { renderMedia(idx) }
                    { renderTitle(idx)}
                    <div className="demo-detail-section-text">
                      {text1}
                    </div>
                  </div>
                )
              }
              else if (type === "text-wide-top") {
                return (
                  <div>
                    { renderTitle(idx)}
                    <div className="demo-detail-section-text">
                      {text1}
                    </div>
                    { renderMedia(idx) }
                  </div>
                )
              }
              else if (type === "text-left") {
                return (
                  <div >
                    { renderTitle(idx)}
                    <div className="two-cols">
                      <div style={{marginRight:"15px"}} className="small-col">
                        {text1}
                      </div>
                      <div className="big-col">
                        { renderMedia(idx) }
                      </div>
                    </div>

                  </div>
                )
              }
              else if (type === "text-right") {
                return (
                  <div >
                    { renderTitle(idx)}
                    <div className="two-cols">
                      <div style={{marginRight:"15px"}} className="big-col">
                        { renderMedia(idx) }
                      </div>
                      <div className="small-col">
                        {text1}
                      </div>
                    </div>
                  </div>
                )
              }
              else if (type === "text-columns") {
                return (
                    <div >
                      { renderTitle(idx)}
                      <div className="two-cols">
                        <div>
                          {text1}
                        </div>
                        <div>
                          {text2}
                        </div>
                      </div>
                    </div>
                  )
              }
            })
          }
        </div>
      </div>
      <div className="footer-back-btn-wrapper">
        <BackButton clearDetails={clearDetails} />
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default DemoDetail;