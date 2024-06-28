import { Col, Container, Row } from "react-bootstrap";

import Fade from "react-reveal/Fade";
import React from "react";
import dashboard from "../../images/dashboard.jpg";
import graud from "../../images/graud.jpg";

// import invento from "../../images/invento.png";

export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
        <Fade left cascade duration={1000} distance="20px">
          <Row className="g-5">
            <Col md={4}>
              <img
                src={dashboard}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
            {/* <Col md={4}>
              <img
                src={invento}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col> */}
            <Col md={4}>
              <img
                src={graud}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}
