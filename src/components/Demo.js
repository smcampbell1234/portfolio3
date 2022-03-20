import React from 'react'
import { demos } from '../data/demoData'
import {  categories } from '../images/skills'

const Demo = () => {
  let imgMap = Object.keys(categories)

  const handleDemo = (id) => {
    window.alert(`you clicked a demo ${id}`)
  }
  return (
    <React.Fragment>
      <div id="demo" className="section-header-wrapper">
        <div className="section-header">Demos</div>
        <div className="section-subheader">Images and videos demonstrating professional work.</div>
      </div>
      <div className="demo-section-wrapper">
        {
          demos.map((demo,idx) => {
            return (
              <div key={demo.id} className="demo-chip-wrapper" onClick={() => handleDemo(demo.id)}>
                <div className="demo-chip-thumbnail">
                  <img src={categories[imgMap[idx]]} width="45px" height="45px"/>
                </div>
                <div className="demo-chip-content">
                  <div className="demo-chip-tile">
                    {demo.title}
                  </div>
                  <div className="demo-chip-callouttext">
                    {demo.callouttext}
                  </div>
                  <div className="demo-chip-detail">
                    {demo.detail}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Demo;