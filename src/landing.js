import React, { useEffect, useState } from "react";
import "./Landing.css";
import backgroundImage from "./background.gif"; // Import the image
import gitHubImg from "./github.gif";
import linkedImg from "./linked.gif";
import arrow from "./arrow.gif";
import avatar from "./avatar.jpg";
function Landing() {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Simulate a delay to allow the fade-in transition
    setTimeout(() => {
      setLoaded(true);
    }, 1000); // Adjust the delay as needed
  }, []);
  function handleOpen() {
    return setOpen(!open);
  }
  return (
    <div className={`landing-page ${loaded ? "loaded" : ""}`}>
      <div className="image-overlay">
        <img
          src={backgroundImage}
          alt="Tanos-Alexandru Dina"
          className={`background-image ${loaded ? "loaded" : ""}`}
        />
        <div className="container">
          <img
            src={avatar}
            alt="thats me"
            className={`avatar fade-in-delay  ${loaded ? "visible" : ""}`}
          />
          <h1 className={`fade-in-delay ${loaded ? "visible" : ""}`}>
            Tanos-Alexandru Dina
          </h1>
          <h2 className={`fade-in-delay ${loaded ? "visible" : ""}`}>
            Web Dev Enthusiast
          </h2>
          <div className={`text-box fade-in-delay ${loaded ? "visible" : ""}`}>
            <p>
              👋 Hello! I'm on a journey to kickstart my career in the IT
              industry, specifically focusing on front-end software development.
              While I don't have professional experience, my commitment to
              learning and my dedication to becoming a top-notch developer drive
              me.
            </p>
            <p>
              💼 At this stage, I'm more interested in gaining knowledge and
              experience than the financial aspect. I'm actively searching for a
              company that's willing to mentor and help me grow as a software
              developer.
            </p>
            <p>
              🚀 If you're a company that values learning and growth, let's
              connect. I'm eager to contribute my passion, adaptability, and
              determination to a team that believes in nurturing talent and
              achieving excellence.
            </p>
          </div>
          <button
            className={`discover-button fade-in-delay ${
              loaded ? "visible" : ""
            }`}
            onClick={handleOpen}
          >
            Discover me
          </button>
          <div>
            <img
              src={arrow}
              alt="arrow"
              className={`arrow fade-in-delay ${open ? "" : "hidden"}`}
            />
          </div>
          <div className="discover-me">
            <a href="https://github.com/799tny" target="blank">
              <img
                src={gitHubImg}
                alt="github"
                className={`socials fade-in-delay ${open ? "" : "hidden"}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dina-tanos-alexandru-896509252/"
              target="blank"
            >
              <img
                src={linkedImg}
                alt="linkedin"
                className={`socials fade-in-delay ${open ? "" : "hidden"}`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
