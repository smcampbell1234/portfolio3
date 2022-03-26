import React from "react";
import { demos } from '../data/demoData'
import Navbar from './Navbar'
import Footer from './Footer'
import {getDemo} from '../selectors/selectors'

const DemoDetail = (props) => {
  const {demoId, setDemoId} = props;

  const demo = getDemo(201)

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
            <div className="flexible-container">
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
      <Navbar isDetail={isDetail} />
      <div className="demo-detail-outer-wrapper">
        <div className="demo-detail-wrapper">
          <h1 className="demo-detail-header">{demo.title}</h1>
          {
            demo.details.map((item,idx) => {
              let {text,type} = item;
              if (type === "text-wide-bottom") {
                return (
                  <div>
                    { renderMedia(idx) }
                    { renderTitle(idx)}
                    <div className="demo-detail-section-text">
                      {text}
                    </div>
                  </div>
                )
              }
              else if (type === "text-wide-top") {
                return (
                  <div>
                    { renderTitle(idx)}
                    <div className="demo-detail-section-text">
                      {text}
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
                        {text}
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
                        {text}
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
                          {text}
                        </div>
                        <div>
                          {text}
                        </div>
                      </div>
                    </div>
                  )
              }
            })
          }
          <button type="button" onClick={clearDemo}>Back</button>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

export default DemoDetail;