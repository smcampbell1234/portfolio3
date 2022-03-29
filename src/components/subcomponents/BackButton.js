import {IoIosArrowBack} from "react-icons/io";
import React from "react";
import { Link, useParams } from 'react-router-dom'

const BackButton = (props) => {
  let {clearDetails} = props

  return (
    <div>
      <Link to={`/`} >
        <div className="details-back-btn-wrapper"
             // onClick={() => clearDetails()}
        >
          <div className="details-back-icon">
            <IoIosArrowBack />
          </div>
          <div className="details-back-text">
            Back
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BackButton;