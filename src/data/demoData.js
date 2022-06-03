import {demo_images} from "../images/skills.js"

/* links to thumbnail and videos are mapped in images section*/
export const demos = [
  {
    id: 201,
    title: "OnCall - Rate MVP",
    thumbnail: "oncall_scheduler_mvp_thumbnail",
    summary: "Compress a desktop application to work in a cellphone browser, this video demonstrates my development process on a professional project, including user story, design prototype, and testing.",
    callouttitle: "Technology",
    callouttext: "Flask, ReactJS, MongDB, Python",
    feature: true,
    show: true,
    date: "2022-01-16",
    details: [
      // {
      //   type: "text-wide-bottom",
      //   media: "video",
      //   media_link: demo_images.oncall_scheduler_media_link,
      //   media_embed_link: demo_images.oncall_scheduler_media_embed_link,
      //   title: "OnCall - Rate MVP",
      //   title_align: "left",
      //   text1: "Compress a desktop application to work in a cellphone browser, this video demonstrates my development process on a professional project, including user story, design prototype, and testing.",
      //   text2: null,
      //   asside: "TECHNOLOGY: Flask, React JS, MongDB, Python",
      //   asside_align: "left",
      // },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "PROTYPES",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-bottom",
        media: "image",
        media_link: demo_images.oncall_prototypes,
        media_embed_link: null,
        title: "Created six prototypes to condense fullscreen (right) into mobile screen (left).",
        title_align: "left",
        text1: "The client wanted to use the browser version of the app on their phone in order to book shifts during their off time. The problem was fitting a scheduling grid and table onto a mobile-size screen. RIGHT: These two images show the full-browser screen. The top is the schedule which has booked shifts and open shifts. The bottom table shows unconfirmed shifts. Both would need to be condensed to fit onto mobile. LEFT: These images show six prototypes I built as solutions. They were written in simple html and css as actual prototypes to allow developers to feel how each operated. While most scroll up and down, prototype 'Horizontal Boxes' has a side-to-side scroll. The team chose the sixth solution (bottom right) titled, 'Floating Accordion 2' (see next section).",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-left",
        media: "image",
        media_link: demo_images.oncall_proto_light_floating_chip,
        media_embed_link: null,
        title: "Chosen Prototype",
        title_align: "left",
        text1: "This chosen prototype was used to develop the mobile view for the desktop app. The top three tabs allow the user to see confirmed booked shifts (Shifts tab), open shifts (Needs tab), and unconfirmed shifts (Confirms tab). The shifts are represented by rectangle chips and can opened to see details pertaining to the shift",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-left",
        media: "image",
        media_link: demo_images.oncall_proto_shift_detail,
        media_embed_link: null,
        title: "Shift Details",
        title_align: "left",
        text1: "Click the shift chip to open its details dialog.",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-left",
        media: "image",
        media_link: demo_images.oncall_proto_shift_detail_wire,
        media_embed_link: null,
        title: "Wireframe for shift details",
        title_align: "left",
        text1: "",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "FINAL PRODUCT",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.oncall_state_tracking,
        media_embed_link: null,
        title: null,
        title_align: "left",
        text1: "These images represent final product for all the views and state in the mobile browser application. The left three columns are facility views. The right three columns are internal views. The bottom views represent detail dialogs for each view. These screens were built and tested over multiple iterations.",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "PERSONAL GRADING RUBRIC",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.oncall_proto_intuitive_rubric,
        media_embed_link: null,
        title: "",
        title_align: "left",
        text1: "Below is how I scored my own feature to judge if the customer would find it intuitive, clear, and easy to use. I created these fields overtime after listening to customers and taking part in company feature reviews. The goal is to have a low score.",
        text2: null,
        asside: null,
        asside_align: null,
      },
    ]
  },
  {
    id: 202,
    title: "Shift Editor - Rates",
    thumbnail: "shift_editor_rates_thumbnail",
    summary: "Create centralized utility functions to manage a complex pay rate and pay boost system, this video demonstrates my development process on a professional project. It reviews multiple iterations, engineering solutions for the customer’s needs, including an example of how the end product was tested.",
    callouttitle: "Technology",
    callouttext: "Full Stack, ReactJS, Hooks, Python, Mongo NoSQL DB, notifications, Sass, HTML5, CSS3",
    feature: false,
    show: true,
    date: "2022-01-13",
    details: [
      // {
      //   type: "text-wide-bottom",
      //   media: "video",
      //   media_link: demo_images.shift_editor_rates_media_link,
      //   media_embed_link: demo_images.shift_editor_rates_media_embed_link,
      //   title: "Shift Editor - Rates",
      //   title_align: "left",
      //   text1: "Create centralized utility functions to manage a complex pay rate and pay boost system, this video demonstrates my development process on a professional project. It reviews multiple iterations, engineering solutions for the customer’s needs, including an example of how the end product was tested.",
      //   text2: null,
      //   asside: "TECHNOLOGY: Flask, React JS, MongDB, Python",
      //   asside_align: "left",
      // },
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.shift_editor_rate_utilities,
        media_embed_link: null,
        title: "Centralized Rate Utility Functions",
        title_align: "left",
        text1: "Dealing with money requires a lot of care. This info-graphic shows how all the rate functions were centralized into one place and used in many. To do this, requirements had to be written, reviewed, implemented, and tested. As the client changed their specifications, I was able to re-write the code in one place.",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-left",
        media: "image",
        media_link: demo_images.shift_editor_rate_flow_documentation,
        media_embed_link: null,
        title: "Calculating Rate Documentation",
        title_align: "left",
        text1: "This info-graphic outlines how rate adjustment works and the centralized functions used to do this (redacted).",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.shift_editor_rate_intuitive_rubric,
        media_embed_link: null,
        title: "Adjusting Rate Guide",
        title_align: "left",
        text1: "The below info-graphics were given to the client as a guide to show how a new rate boosting feature operated. It includes linked and unlinked modes and describes limited boosts. This comes after the a hole was found in the client's boosting flow that allowed for unchecked boost. This feature saved the client at least $35,000 per month. The guide was meant to be simple, as the feature was written to be intuitive.",
        text2: null,
        asside: null,
        asside_align: null,
      },
    ],
  },
  {
    id: 2021,
    title: "Site - Total Build",
    thumbnail: "site_build_thumbnail",
    summary: "Redesigned and replaced a legacy 26 screen application with a modern application using a modern stack including ReactJS, auth0, dynamic routing and responsive design. Completed the application within one month to pass a Google-required puncture test for the customer.",
    callouttitle: "Technology",
    callouttext: "ReactJS, Python, MySQL DB, ReactPrime, notifications,HTML5, CSS3",
    feature: false,
    show: true,
    date: "2022-01-13",
    details: [
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.main_page,
        media_embed_link: null,
        title: "Home Page",
        title_align: "left",
        text1: "The screens below represent sample screens from a 26-screen website rebuild project.",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-left",
        media: "image",
        media_link: demo_images.responding_contacts,
        media_embed_link: null,
        title: "Responding Contacts",
        title_align: "left",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-left",
        media: "image",
        media_link: demo_images.add_user,
        media_embed_link: null,
        title: "Add User",
        title_align: "left",
        text1:null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-left",
        media: "image",
        media_link: demo_images.stepper,
        media_embed_link: null,
        title: "Sync App With Third Party",
        title_align: "left",
        text1:null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.summary_page,
        media_embed_link: null,
        title: "Summary Page",
        title_align: "left",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
    ],
  },
  {
    id: 2022,
    title: "Site - Optimization",
    thumbnail: "optimization_thumbnail",
    summary: "Based on client feedback, performed an in-depth analysis of an application flow, redesigned and refactored the flow, reducing redundant API calls, optimizing the user interaction flow, which resulted in a 30% increase in speed.",
    callouttitle: "Technology",
    callouttext: "ReactJS, Python, MongoDB",
    feature: false,
    show: true,
    date: null,
    details: [
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "SCREEN OPTIMIZATION",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.optimization,
        media_embed_link: null,
        title: "",
        title_align: "left",
        text1: "This infographic shows the elimination of all API Calls in step four and the reduction of many calls in step two, speeding up loading time by 30 percent when a user changes region from the scheduler screen.",
        text2: null,
        asside: null,
        asside_align: null,
      },
    ],
  },
  {
    id: 203,
    title: "Star Rating - Employee Score",
    thumbnail: "star_rating_thumbnail",
    summary: "A dialog to help support staff managed employee scores, including seeing all details for employee scores and assigning stars (kudos) for an employee shift.",
    callouttitle: "Technology",
    callouttext: "Full Stack, React JS, Hooks, Python, Mongo NoSQL DB, notifications, Sass, HTML5, CSS3",
    feature: true,
    show: true,
    date: "2022-01-09",
    details: [
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "STAR RATING - EMPLOYEE SCORE",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-bottom",
        media: "image",
        media_link: demo_images.star_rating_not_override,
        media_embed_link: null,
        title: "Dialog to manage employee rating scores",
        title_align: "left",
        text1: "Employees were sending support tickets and calling support to learn why their score had gone down. Support did not have a way to see score data. This dialog was created to show actions that impacted the employee score. It also allows support/internal to give out stars (kudos) to employees. Employees can be given up and down votes by the facility they worked at. They also have objective measurables such as cancellations, no shows, and lates. Stars can be given by internal staff as a small boost to the score for that shift. The score can also be overridden for a 45-day period.",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-bottom",
        media: "image",
        media_link: demo_images.star_rating_override,
        media_embed_link: null,
        title: "Employee score has been overriden for 45 days",
        title_align: "left",
        text1: "During the rollout of employee scores, employees found they had collected an unrecoverable amount of ‘hits’ on their record. The scores roll off after 45 days. So an override assigns them 85 points for 45 days, giving the employee a chance to clear their down-votes/hits and collect up-votes. After 45 days, they are assigned their actual score. The above example shows an override. Since the employee's actual score of 96 is higher than 85, he keeps his actual score. If his score had been lower than 85, he would have an received a score of 85 for 45 days.",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "MOCHUP",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-bottom",
        media: "image",
        media_link: demo_images.star_rating_mochup,
        media_embed_link: null,
        title: "",
        title_align: "left",
        text1: "This is an initial mochup. Slight changes (as seen when comparing with actual images above) were made from design reviews with dev team and client.",
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "PERSONAL GRADING RUBRIC",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: null,
        media_link: null,
        media_embed_link: null,
        title: "hr-line",
        title_align: "center",
        text1: null,
        text2: null,
        asside: null,
        asside_align: null,
      },
      {
        type: "text-wide-top",
        media: "image",
        media_link: demo_images.star_rating_intuitive_rubric,
        media_embed_link: null,
        title: "",
        title_align: "left",
        text1: "Below is how I scored my own feature to judge if the customer would find it intuitive, clear, and easy to use. I created these fields overtime after listening to customers and taking part in company feature reviews. The goal is to have a low score.",
        text2: null,
        asside: null,
        asside_align: null,
      },
    ],
  },

















  {
    id: 204,
    title: "Test Demo 4",
    thumbnail: "shift_editor_rates_thumbnail",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus leo, pulvinar at justo eget, tempor condimentum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada",
    callouttitle: "Technology",
    callouttext: "Full Stack, React JS, Hooks, Python, Mongo NoSQL DB, notifications, Sass, HTML5, CSS3",
    feature: false,
    show: false,
    date: "2022-01-08",
    details: [],
  },
  {
    id: 205,
    title: "Test Demo 5",
    thumbnail: "shift_editor_rates_thumbnail",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus leo, pulvinar at justo eget, tempor condimentum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada",
    callouttitle: "Technology",
    callouttext: "Full Stack, React JS, Hooks, Python, Mongo NoSQL DB, notifications, Sass, HTML5, CSS3",
    feature: false,
    show: false,
    date: "2022-01-05",
    details: [],
  },
  {
    id: 206,
    title: "Test Demo 6",
    thumbnail: "shift_editor_rates_thumbnail",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus leo, pulvinar at justo eget, tempor condimentum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada",
    callouttitle: "Technology",
    callouttext: "Full Stack, React JS, Hooks, Python, Mongo NoSQL DB, notifications, Sass, HTML5, CSS3",
    feature: true,
    show: false,
    date: "2022-01-02",
    details: [],
  },
]