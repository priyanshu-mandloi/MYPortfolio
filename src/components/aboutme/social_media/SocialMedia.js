import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Container, Row } from "react-bootstrap";

import { Col } from "react-bootstrap";
import React from "react";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://twitter.com/PriyanshuM75755"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                < AiFillTwitterSquare/>
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillFacebook />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://github.com/priyanshu-mandloi"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.linkedin.com/in/priyanshu-mandloi-45626324a"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
