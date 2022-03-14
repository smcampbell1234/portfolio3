import React from 'react';

const Dummy = () => {
  return (
    <React.Fragment>
      <div id="about" className="dummy" style={{backgroundColor:"#FF715B"}}>
        <h3 className="dummy-header">About</h3>
      </div>
      {/*<div id="skills" className="dummy" style={{backgroundColor:"#FFB400"}}>*/}
      {/*  <h3 className="dummy-header">Skills</h3>*/}
      {/*</div>*/}
      <div id="contact" className="dummy" style={{backgroundColor:"#F0EFF4"}}>
        <h3 className="dummy-header">Contact</h3>
      </div>
      <div id="profile" className="dummy" style={{backgroundColor:"#333333", color:"white"}}>
        <h3 className="dummy-header">Profile</h3>
      </div>
      <div id="random" className="dummy" style={{backgroundColor:"#49A6E9", color:"white"}}>
        <h3 className="dummy-header">Random</h3>
      </div>
    </React.Fragment>
  )
}

export default Dummy;