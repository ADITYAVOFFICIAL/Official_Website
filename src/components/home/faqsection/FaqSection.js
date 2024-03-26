import React from "react";
import "./FaqSection.css";
import { Accordion } from "react-bootstrap";
const FaqSection = (props) => {
  return (
    <>
      <section className="landing-section section h-70vh lan">
        <div className="container" style={{ marginTop: "-90px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center">
              <h1 className="title">
              Frequently
                <br />
                <span style={{ color: "var(--secondary-color)" }}>
                asked questions
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="container">
          <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>FAQ #1</Accordion.Header>
        <Accordion.Body>
          INFO
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>FAQ #2</Accordion.Header>
        <Accordion.Body>
          INFO
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>

        </div>
      </section>
    </>
  );
};

export default FaqSection;
