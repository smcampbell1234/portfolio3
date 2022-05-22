import React, {useEffect} from "react";
import {getDemo} from '../selectors/selectors'
import BackButton from "./subcomponents/BackButton"
import { useParams } from 'react-router-dom'
import Layout from "./Layout";

const DemoDetail = () => {
  const { demoId } = useParams();
  const item = getDemo(demoId)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Layout item={item} />
      <div className="footer-back-btn-wrapper">
        <BackButton/>
      </div>
    </React.Fragment>
  )
}

export default DemoDetail;