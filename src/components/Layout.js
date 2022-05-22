import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {getDemo} from "../selectors/selectors";
import BackButton from "./subcomponents/BackButton";

const Layout = ({item}) => {
  const { demoId } = useParams();
  // const demo = getDemo(demoId)

  const details = item.details;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /********* Render Helpers **************/
  const renderMedia = (idx) => {
    let {media,media_link,media_embed_link} = details[idx]
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

  const renderTitle = (item,idx) => {
    if (item.title === "blank") {
      return <div className="layout-faux-line-space"/>
    }
    if (item.title === "hr-line") {
      return <div className="layout-faux-line-space"><hr/></div>
    }
    return (
      <div>
          <div style={{textAlign: item.title_align}} className="demo-detail-section-title">{item.title}</div>
          <div style={{textAlign: item.asside_align}} className="demo-detail-section-asside">{item.asside}</div>
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="demo-detail-outer-wrapper">
        <div className="demo-detail-wrapper">
          <h1 className="demo-detail-header">{item.title}</h1>
          {
            details.map((item,idx) => {
              let {text1,text2,type} = item;
              if (type === "text-wide-bottom") {
                return (
                  <div>
                    { renderMedia(idx) }
                    { renderTitle(item,idx)}
                    <div className="demo-detail-section-text">
                      {text1}
                    </div>
                  </div>
                )
              }
              else if (type === "text-wide-top") {
                return (
                  <div>
                    { renderTitle(item,idx)}
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
                    { renderTitle(item,idx)}
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
                    { renderTitle(item,idx)}
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
                    { renderTitle(item,idx)}
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
    </React.Fragment>
  )
}

export default Layout;