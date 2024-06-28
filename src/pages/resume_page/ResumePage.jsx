import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import React, { useEffect, useState } from "react";

import { AiOutlineDownload } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import Zoom from "react-reveal/Zoom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Use the Google Drive Viewer link
const googleDriveViewerLink = "https://drive.google.com/file/d/1pEepRb9ZaNMR9I2PO8UXpBBWly0uukpZ/view?usp=sharing";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            <div
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <Zoom left cascade>
                <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
              </Zoom>
            </div>
            <Container fluid className="certificate-section" id="about">
              <div className="d-flex justify-content-center mt-4">
                <Button variant="primary" href={googleDriveViewerLink} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
              <div className="resume d-flex justify-content-center">
                {/* Embed the Google Drive Viewer */}
                <iframe
                  title="resume"
                  src={`https://drive.google.com/file/d/1pEepRb9ZaNMR9I2PO8UXpBBWly0uukpZ/preview`}
                  width="100%"
                  height="800px"
                ></iframe>
              </div>
              <div className="d-flex justify-content-center">
                <Button variant="primary" href={googleDriveViewerLink} target="_blank">
                  <AiOutlineDownload />
                  &nbsp;Download Resume
                </Button>
              </div>
            </Container>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;
