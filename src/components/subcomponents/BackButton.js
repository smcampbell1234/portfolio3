import {IoIosArrowBack} from "react-icons/io";
import React from "react";
import { Link, useParams } from 'react-router-dom'
import DemoDetail from "../DemoDetail";

const BackButton = (props) => {
  return (
    <div >
      <Link to={`/`} >
        <div className="details-back-btn-wrapper">
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