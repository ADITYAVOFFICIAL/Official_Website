import React,{useState} from "react";
import Blogcard from "../components/blogs/blogcard/Blogcard";
import Tab from "../components/team/tabbar/Tab";
import "../css/Blogs.css";

function Blogs() {
  const [selectedTab, setSelectedTab] = useState("rd-tab"); // Default selected tab is R&D

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };
  return (
    <>
      <section className="landing-section section h-70vh" style={{ marginTop: "220px" }}>
        <div className="container" style={{ marginTop: "-110px" }}>
          <div className="gbc1"></div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-10 text-center mobtitle">
              <h1 className="title mobblogtitle " style={{ marginBottom: "40px" }}>
                Our{" "}
                <span style={{ color: "var(--secondary-color)", textShadow: "0 0 10px #57abd7, 0 0 20px #57abd7" }}>
                  Blogs
                </span>{" "}
              </h1>
            </div>
          </div>
          <ul className="nav nav-tabs justify-content-center" role="tablist" style={{ marginBottom: "35px" }}>
            <Tab
              className="nav-link tab-btn active"
              id="rd-tab"
              targetID="#rd-tab-pane"
              title="Research & Development"
              selected={false}
            />
            <Tab
              className="nav-link tab-btn"
              id="webapp-tab"
              targetID="#web-app-tab-pane"
              title="Web/App Development"
              selected={false}
            />
            <Tab
              className="nav-link tab-btn"
              id="technical-tab"
              targetID="#technical-tab-pane"
              title="Blockchain"
              selected={false}
            />
            <Tab
              className="nav-link tab-btn"
              id="misc-tab"
              targetID="#misc-tab-pane"
              title="Miscellaneous"
              selected={false}
            />
          </ul>
          <div className="blog-card-container">
            <Blogcard
              imgSrc="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*AMm6E7rpmHT4ca30cIiY2Q.png"
              title="From Words to Graphs: How Deep Graph Learning is Revolutionising NLP"
              aboutblog="ADITYA VERMA"
              role="Chairperson"
              Mediumlink="https://medium.com/data-science-community-srm/deep-graph-learning-193cc0f6dd18"
            />
            <Blogcard
              imgSrc="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_dluUkHWTPSVw10Z6LhAlQ.png"
              title="GANs in Big Data Analytics and Data Science"
              aboutblog="ADITYA VERMA"
              role="Chairperson"
              Mediumlink="https://medium.com/@adityaver/gans-in-big-data-analytics-and-data-science-95caa0cc2054"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
