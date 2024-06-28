import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import React from "react";
import { Row } from "react-bootstrap";
import Slide from "react-reveal/Slide";

const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Priyanshu Mandloi </b>
                and I am a <b className="purple"> Information Technology </b>
                student at{" "}
                <b className="purple">
                  Institute of Engineering & Technology DAVV{" "}
                </b>
                in Indore, India.
                <br />
                <br />I am proficient in various programming languages such as
                &nbsp;
                <b className="purple"> C++ , HTML , CSS , JavaScript. </b>
                <br />
                <br />I also have experience working with frameworks and
                libraries such as &nbsp;
                <b className="purple">
                  {" "}
                  NodeJS, ReactJS, Bootstrap , EJS , Express.js.{" "}
                </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks.
                </b>
                <br />
                <br />
                In my free time, I enjoy learning new technologies and &nbsp;
                <b className="purple">
                  building new web technologies and products.{" "}
                </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
