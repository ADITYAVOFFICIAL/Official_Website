import React from 'react'
import '../css/About.css'

function About() { 

  return (
    <>
    <section className="landing-section section h-70vh" style={{marginTop:"220px"}}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title">
                About{" "}
                <span style={{ color: "var(--secondary-color)",textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                 Us
                </span>{" "}
              </h1>
            </div>
          </div>
          <div className="container">
                <div className="d-flex" style={{ flex: "50%" ,fontWeight:"500"}}>
                  <div>
                    <p className='textt'>The ACM SIGKDD Student Chapter at SRM KTR Campus is a dynamic community of students passionate about data science and its applications. As an official student chapter of ACM SIGKDD (Special Interest Group on Knowledge Discovery in Data), we are committed to fostering a culture of innovation, learning, and collaboration in the field of data science.</p>
                  </div>
                </div>
  <div className="content">
  </div>
</div>
        </div>
      </section>
    </>
  )
}

export default About