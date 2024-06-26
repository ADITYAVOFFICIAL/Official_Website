import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import "../css/Projects.css";

function Projects() {
  return (
    <>
      <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title mobprojtitle " style={{ marginBottom: "40px" }}>
                Our{" "}
                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                  Projects
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="proj-card-container">
            <ProjectCard
              imgSrc="https://s3.amazonaws.com/aurochssolutions.com-images/sales_forecasting_01_10ee95f93b.jpeg"
              title="Sales Forecasting"
              role="7 April 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/R-D-Projects-April-2024/tree/main/Sales%20Forecasting"
            />
            <ProjectCard
              imgSrc="https://editor.analyticsvidhya.com/uploads/32086heading.jpeg"
              title="SMS Spam Detection"
              role="7 April 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/R-D-Projects-April-2024/tree/main/SMS%20Spam%20Detection"
            />
            <ProjectCard
              imgSrc="https://raw.githubusercontent.com/ADITYAVOFFICIAL/Official_Website/main/public/ss.png"
              title="SRMIST KTR ACM SIGKDD Student Chapter Website"
              role="24 March 2024"
              Mediumlink="https://github.com/ACM-SIGKDD-SRM-KTR-STUDENT-CHAPTER/Official_Website"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
