import React, { useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
// eslint-disable-next-line
import Sample from "../../assets/Events/sample.png"
import Gitsession from "../../assets/Events/gitgithub.png"
import Orientation1 from "../../assets/Events/or1.jpg"
import Core from "../../assets/Events/core.jpg"
import HTMLCSS from "../../assets/Events/htmlcss.jpeg"
// import YouTube from "react-youtube";
import "./teamslide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCss3, faGitSquare, faGithub, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons/faPeopleArrows";

function TeamCarousel() {
  const [isPlaying, setIsPlaying] = useState(false);
  // eslint-disable-next-line
  const [quality, setQuality] = useState("hd1080"); // Set quality to 1080p
  const playerRef = useRef(null);
// eslint-disable-next-line
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (playerRef.current) {
      isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
    }
  };

  return (
    <section className="section">
      <div className="container conty">
        <div className="row justify-content-center text-center">
          <div className="col-sm-5 col-lg-9 w-100vw text-center">
          <h1 className="title ourr" style={{marginBottom:"35px",marginTop:"-200px"}}>
                Our
                {" "}
                <span style={{ color: "var(--secondary-color)" }}>
                  Gallery
                </span>{" "}
              </h1>
            <Carousel fade slide className="carousel-glow" interval={null}>
            <Carousel.Item>
                <img src={HTMLCSS} className="d-block w-100 mobile-image" alt="Coming Soon"/>
                <Carousel.Caption>
                  <h5 className="eventname"><FontAwesomeIcon icon={faHtml5} style={{ marginRight: "3px" }} />HTML5 <FontAwesomeIcon icon={faCss3} style={{ marginRight: "2px" }} />CSS3 session</h5>
                </Carousel.Caption>
              </Carousel.Item>
            <Carousel.Item>
                <img src={Gitsession} className="d-block w-100 mobile-image" alt="Coming Soon"/>
                <Carousel.Caption>
                  <h5 className="eventname"><FontAwesomeIcon icon={faGitSquare} style={{ marginRight: "4px" }} />Git & <FontAwesomeIcon icon={faGithub} style={{ marginRight: "2px" }} />GitHub session</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={Orientation1} className="d-block w-100 mobile-image" alt="Coming Soon"/>
                <Carousel.Caption>
                  <h5 className="eventname"><FontAwesomeIcon icon={faPeopleArrows} style={{ marginRight: "4px" }} />Orientation '24</h5>
                </Carousel.Caption>
              </Carousel.Item>
              {/* <Carousel.Item>
                <div style={{ width: "100%", height: "110%", borderRadius: "22px", overflow: "hidden" }}>
                  <YouTube
                    videoId="XN9pRYh3zTA"
                    opts={{ width: "100%", height: "500px", playerVars: { autoplay: 0, modestbranding: 1, controls: 0, quality: quality } }}
                    onReady={(event) => {
                      playerRef.current = event.target;
                      setIsPlaying(false);
                    }}
                  />
                </div>
              </Carousel.Item> */}
              <Carousel.Item>
                <img src={Core} className="d-block w-100 mobile-image" alt="Coming Soon"/>
                <Carousel.Caption>
                  <h5 className="eventname"><FontAwesomeIcon icon={faPeopleGroup} style={{ marginRight: "4px" }} />Founding Team 2024</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCarousel;
