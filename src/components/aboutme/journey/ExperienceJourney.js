import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >

          <p>• Volunteered at the college graduation ceremony, demonstrating strong commitment and contributing   significantly to the event's success during my first year of college.</p>
          <p>• Acquired valuable technical skills by delving into MERN (MongoDB, Express, React, Node.js) development, gaining practical knowledge and experience in web development.</p>
          <p>• Developed proficiency in SQL, including the effective use of SQL commands, enhancing my database management skills.</p>
          <p>• Displayed a strong passion for machine learning, actively engaged in learning and working on ML projects, showcasing a growing interest and dedication to this field.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
