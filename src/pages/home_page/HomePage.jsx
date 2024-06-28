import { Col, Container, Row } from "react-bootstrap";

import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import { AiFillGithub } from "react-icons/ai";
import Certification from "../../components/certificate/Certification";
import Contactus from "../../components/contactus/Contactus";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Fade from "react-reveal/Fade";
import { IoIosMail } from "react-icons/io";
import Particle from "../../Particle";
import Projects from "../../components/projects/Projects";
import React from "react";
import Tilt from "react-parallax-tilt";
import Typing from "./Typing";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hola!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Priyanshu Mandloi</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">
                  <li className="socialicons">
                    <a
                      href="https://github.com/priyanshu-mandloi"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://www.linkedin.com/in/priyanshu-mandloi-45626324a"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour  homesocialicons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons">
                    <a
                      href="https://twitter.com/PriyanshuM75755"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaXTwitter />
                    </a>
                  </li>
                  {/* <li className="socialicons">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <FaFacebookF />
                    </a>
                  </li> */}
                  <li className="socialicons">
                    <a
                      href="mailto:priyanshumandloigurukul@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                    >
                      <IoIosMail />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img src="./pm1.png" alt="home pic" className="img-fluid" />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
