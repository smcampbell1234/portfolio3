import React from "react";
import { useParams } from 'react-router-dom'
import BackButton from "./subcomponents/BackButton";
import Layout from "./Layout";
import { projects } from "../data/projectsData.js";

const ProjectDetails = () => {
  const {projectId} = useParams();
  let item = projects.find(proj => proj.id === parseInt(projectId))
  return (
    <div>
      <Layout item={item} />
      <div className="footer-back-btn-wrapper">
        <BackButton/>
      </div>
    </div>

  )
}

export default ProjectDetails;