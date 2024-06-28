import { Container, Row } from "react-bootstrap";
import {
  SiCodio,
  SiGeeksforgeeks,
  SiHackerearth,
  SiLeetcode,
} from "react-icons/si";

import { Col } from "react-bootstrap";
import { FaHackerrank } from "react-icons/fa";
import React from "react";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>See my rank</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={3}>
            <a
              href="https://www.hackerrank.com/profile/priyanshumandlo4"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <FaHackerrank />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://leetcode.com/priyanshumandloigurukul/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiLeetcode />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.hackerearth.com/challenges/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiHackerearth />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://auth.geeksforgeeks.org/user/priyanshumanrdwh/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiGeeksforgeeks />
              </Zoom>
            </a>
          </Col>
          <Col md={3}>
            <a
              href="https://www.codingninjas.com/studio/profile/633a0a3c-84b5-4477-885c-f72ac92746af"
              target="_blank"
              rel="noreferrer"
              className="icon-colour  home-social-icons"
            >
              <Zoom cascade>
                <SiCodio />
              </Zoom>
            </a>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
}
