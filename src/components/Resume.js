import React from 'react'
import { demos } from '../data/demoData'
import { demo_images } from '../images/skills'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown';

let myMarkdown = "# Resume 2022\n" +
  "\n" +
  "## **Sean Campbell**\n" +
  "\n" +
  "seanmc2009@gmail.com\n" +
  "\n" +
  "760 410-7510\n" +
  "\n" +
  "seancampbellportfolio.netlify.app\n" +
  "\n" +
  "---\n" +
  "\n" +
  "# **Objective**" +
  "To obtain a front-end developer position  at ABC Company to use my mastery of ReactJS to create powerful and rich experiences for users..\n" +
  "\n" +
  "# **Experience**\n" +
  "\n" +
  "### **Too Symphony Solutions**                                               *March 2020 - Current*\n" +
  "\n" +
  "***Full Stack Developer***\n" +
  "\n" +
  "* Rewrote a ‘teams’ feature to divide 3,000 employees among 22 managers by re-defining requirements and implementing them over three iterations. Its large data sets required strong knowledge of the FReMP Stack, resulting in an approximate 4% retention increase for new hires.\n" +
  "* Redesigned and replaced a legacy 26 screen application with a modern application using a modern stack including ReactJS, auth0, dynamic routing and responsive design. Completed the application within one month to pass a Google-required puncture test for the customer.\n" +
  "* Based on client feedback, performed an in-depth analysis of an application flow, redesigned and refactored the flow, reducing redundant API calls, optimizing the user interaction flow, which resulted in a 30% increase in speed.\n" +
  "* Discovered discrepancies in a rate-boosting feature while building a new pay screen. Identified data, created and implemented new requirements, centralized business logic, and presented to the customer over multiple iterations, resulting in client savings of $35,000 per month.\n" +
  "* Created a system to boost performance scores by ‘hanging a star’ on employees, along with a screen to detail scores for each employee. The feature required Flask, Python, ReactJS, and MongDB, and helped rate 3,000 employees on a rolling 40-day timeline. Stars and rating scores were two factors in a campaign that ultimately increased new employee retention by 4%.\n" +
  "\n" +
  "***Testing, Documentation, Collaboration, and Leadership***\n" +
  "\n" +
  "* Audited a large enterprise application for 46 dialog-based user cases, and created Selenium BDD (Behavior Driven Development) tests for each to give increased coverage, eliminating an average of four support calls (six person-hours) per week.\n" +
  "* Proposed and implemented a project to move from manually created automation using Selenium to a modern testing tool that integrated ML, optimized UI, and integrated logging and organizational mechanisms. Created timelines, benchmarks, and learning materials that resulted in a 35% increase in test coverage. The resulting system was far more resilient, reducing the maintenance costs by an average of 10 person-hours per week, and reducing the costs of creating new tests by an average of six hours.\n" +
  "* During my first year of working on various features and bugs in the company, I created the only documentation on existing designs, business logic and overall application flow. I then proposed and then implemented an internal company wiki based on my existing set of collected artifacts. More broadly, I championed a change in the internal culture around pre- and post-project documentation. The new process and collection became an important selling point during diligence when a private equity firm purchased the company in June 2021.\n" +
  "* Created onboarding training and documentation materials to help both new-hires to the company as well as internal transfers onto the anchor client project.\n" +
  "* Leveraging an existing bi-weekly meeting with 20+ client users, created over 60+ stories that drove increased customer satisfaction outside of the standard project roadmap. In addition to improving the usability of the application, the company gained trust and these users, which markedly improved the relationship, which manifested itself in everything from our product demos to our ongoing support efforts.\n" +
  "\n" +
  "# **Education**\n" +
  "\n" +
  "**Palomar College** (GPA 4.0)                                                                                     *2015 – 2017*\n" +
  "\n" +
  "* 38 units toward Associates Web Dev and Associates Computer Science\n" +
  "* C | C++ | Java | PHP | JS | HTML5 | CSS3 | MySQL | Python | Data Structures | Adobe\n" +
  "\n" +
  "**UC Santa Barbara** (GPA 3.67)                                                                                *1997 – 2002*\n" +
  "\n" +
  "* BS, Cell and Developmental Biology, 2002\n" +
  "\n" +
  "**Udemy Online Learning   ***                                                                                      2020 – 2022*\n" +
  "\n" +
  "* ReactJS, Hooks, Sass, Python, Swagger, Parallax, Notion, Agile, Data Structures, Flex Box, Grid"
const Resume = (props) => {
  const { scrollY,handlePosition} = props;
  return (
    <React.Fragment>
      <div id="resume" className="section-header-wrapper">
        <div className="section-header">Resume</div>
        <div className="section-subheader">Experience, Skills, Education</div>
      </div>
      <div className="resume-section-wrapper">
        <article className="result">
          <ReactMarkdown>
            {myMarkdown}
            {/*"# Resume 2022*/}
            {/*## **Sean Campbell***/}
            {/*seanmc2009@gmail.com*/}
            {/*760 410-7510*/}
            {/*seancampbellportfolio.netlify.app*/}
            {/*---*/}
            {/*# **Objective***/}
            {/*To obtain a front-end developer position  at ABC Company to use my mastery of ReactJS to create powerful and rich experiences for users.."*/}

            {/*# **Experience***/}

            {/*### **Too Symphony Solutions**                                               *March 2020 - Current**/}

            {/****Full Stack Developer****/}

            {/*- Rewrote a ‘teams’ feature to divide 3,000 employees among 22 managers by re-defining requirements and implementing them over three iterations. Its large data sets required strong knowledge of the FReMP Stack, resulting in an approximate 4% retention increase for new hires.*/}
            {/*- Redesigned and replaced a legacy 26 screen application with a modern application using a modern stack including ReactJS, auth0, dynamic routing and responsive design. Completed the application within one month to pass a Google-required puncture test for the customer.*/}
            {/*- Based on client feedback, performed an in-depth analysis of an application flow, redesigned and refactored the flow, reducing redundant API calls, optimizing the user interaction flow, which resulted in a 30% increase in speed.*/}
            {/*- Discovered discrepancies in a rate-boosting feature while building a new pay screen. Identified data, created and implemented new requirements, centralized business logic, and presented to the customer over multiple iterations, resulting in client savings of $35,000 per month.*/}
            {/*- Created a system to boost performance scores by ‘hanging a star’ on employees, along with a screen to detail scores for each employee. The feature required Flask, Python, ReactJS, and MongDB, and helped rate 3,000 employees on a rolling 40-day timeline. Stars and rating scores were two factors in a campaign that ultimately increased new employee retention by 4%.*/}

            {/****Testing, Documentation, Collaboration, and Leadership****/}

            {/*- Audited a large enterprise application for 46 dialog-based user cases, and created Selenium BDD (Behavior Driven Development) tests for each to give increased coverage, eliminating an average of four support calls (six person-hours) per week.*/}
            {/*- Proposed and implemented a project to move from manually created automation using Selenium to a modern testing tool that integrated ML, optimized UI, and integrated logging and organizational mechanisms. Created timelines, benchmarks, and learning materials that resulted in a 35% increase in test coverage. The resulting system was far more resilient, reducing the maintenance costs by an average of 10 person-hours per week, and reducing the costs of creating new tests by an average of six hours.*/}
            {/*- During my first year of working on various features and bugs in the company, I created the only documentation on existing designs, business logic and overall application flow. I then proposed and then implemented an internal company wiki based on my existing set of collected artifacts. More broadly, I championed a change in the internal culture around pre- and post-project documentation. The new process and collection became an important selling point during diligence when a private equity firm purchased the company in June 2021.*/}
            {/*- Created onboarding training and documentation materials to help both new-hires to the company as well as internal transfers onto the anchor client project.*/}
            {/*- Leveraging an existing bi-weekly meeting with 20+ client users, created over 60+ stories that drove increased customer satisfaction outside of the standard project roadmap. In addition to improving the usability of the application, the company gained trust and these users, which markedly improved the relationship, which manifested itself in everything from our product demos to our ongoing support efforts.*/}

            {/*# **Education***/}

            {/***Palomar College** (GPA 4.0)                                                                                     *2015 – 2017**/}

            {/*- 38 units toward Associates Web Dev and Associates Computer Science*/}
            {/*- C | C++ | Java | PHP | JS | HTML5 | CSS3 | MySQL | Python | Data Structures | Adobe*/}

            {/***UC Santa Barbara** (GPA 3.67)                                                                                *1997 – 2002**/}

            {/*- BS, Cell and Developmental Biology, 2002*/}

            {/***Udemy Online Learning   ***                                                                                      2020 – 2022**/}

            {/*- ReactJS, Hooks, Sass, Python, Swagger, Parallax, Notion, Agile, Data Structures, Flex Box, Grid*/}
          </ReactMarkdown>
        </article>
      </div>
    </React.Fragment>
  )
}

export default Resume;