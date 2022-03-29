import React from 'react'
import { demos } from '../data/demoData'
import { demo_images } from '../images/skills'
import { Link, useParams } from 'react-router-dom'

const Demo = (props) => {
  const {setDemoId} = props

  // const handleDemo = (id) => {
  //   setDemoId(id)
  // }
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
              <Link to={`/demo/${demo.id}`} >
                <div key={demo.id} className="demo-chip-wrapper"
                     // onClick={() => setDemoId(demo.id)}
                >

                  <div className="demo-chip-top">

                    <div className="demo-chip-thumbnail">
                      <img src={demo_images[demo.thumbnail]} />
                    </div>

                    <div className="demo-chip-top-text">
                      <div className="demo-chip-tile">
                        {demo.title}
                      </div>
                      <div className="demo-chip-callouttext">
                        {demo.callouttext}
                      </div>
                      <div/>
                      <div/>
                    </div>

                  </div>

                  <div className="demo-chip-detail">
                    {demo.summary}
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Demo;