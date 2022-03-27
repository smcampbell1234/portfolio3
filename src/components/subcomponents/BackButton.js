import {IoIosArrowBack} from "react-icons/io";
import React from "react";

const BackButton = (props) => {
  let {clearDetails} = props

  return (
    <div>
      <div className="details-back-btn-wrapper" onClick={() => clearDetails()} >
        <div className="details-back-icon">
          <IoIosArrowBack />
        </div>
        <div className="details-back-text">
          Back
        </div>
      </div>
    </div>
  )
}

export default BackButton;