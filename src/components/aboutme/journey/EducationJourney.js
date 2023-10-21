import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import Flip from "react-reveal/Flip";
import { Link } from "react-router-dom";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";

function EducationJourney() {
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
          <h1>Qualification Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2017-2018"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            SECONDARY Education
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Sanskar Academy, Thikri
          </h4>
          <p>
              I have successfully completed my 10th
               grade with an percentage of 80%.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2019 - 2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
             Higher Secondary Education
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            Gurukul School, Dhamnod
          </h4>
          <p>
          I have scored 88.6% in class 12th in the year 2019-2020 and
              cleared the JEE Mains exam in the year of 2021. I have achieved
              50644 AIR with my self studies.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2025"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">Post Graduation</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
             IET DAVV , Indore
          </h4>
          <p>
             I am currently pursuing my post-graduation from the 
            Institute of Engineering and Technology (IET) DAVV, Indore.
            I have scored an overall 8.61 cgpa during the two years 
            of my college life.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
