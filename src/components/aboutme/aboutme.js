import React from "react";
import backg from "./backg.jpg";
import backg2 from "./backg2.jpg";
import myPDF from "./new-resume.pdf";

import "./aboutme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
var pokeslap = require("./Pokeslap.gif");
var mydood = require("./mydood.gif");
var fresh = require("./freshtomatoes.gif");

function Aboutme() {
  return (
    <div className="page-break">
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(${backg})`,
          backgroundSize: "cover",
          height: "100%",
          color: "#f5f5f5",
        }}
      >
        <div className="name-card">
          <div className="name">
            <h1>Mustafa's Portfolio</h1>
            <h4 className="italic">A Full-Stack Web Developer</h4>
          </div>
          <div className="buttons">
            <div>
              <button id="left-btn">
                <a className="links" href="#projects">
                  Projects
                </a>
              </button>
              <button id="mid-btn">
                <a className="links" href="#resume">
                  Resume
                </a>
              </button>
              <button id="right-btn">
                <a className="links" href="#contact">
                  Contact
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <h2>What I do?</h2>
          <div className="card-content">
            <div>
              <h3>Building Websites</h3>
              <p>Bringing your personal or business projects to reality.</p>
            </div>
            <div>
              <h3>UI Design</h3>
              <p>
                Styling and optimizing websites on demand to serve your
                customers.
              </p>
            </div>
            <div>
              <h3>Website Functionality</h3>
              <p>
                Customizing project functionality to your needs, and making
                websites user-friendly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg_image"
        style={{
          backgroundImage: `url(${backg2})`,
          backgroundSize: "cover",
          height: "100%",
          color: "#f5f5f5",
        }}
      >
        <div>
          <div id="projects" className="card-container2">
            <h2>Projects</h2>
            <div className="card1">
              <div className=" card2">
                <a href="https://poke-slap.herokuapp.com/">
                  <img className="workimg" src={pokeslap} width="100%" alt="" />
                </a>
                <h3 className="proj-titles">Poke-Slap</h3>
              </div>
              <div className=" card2">
                <a href="https://my-dood.herokuapp.com/">
                  <img className="workimg" src={mydood} width="100%" alt="" />
                </a>
                <h3 className="proj-titles">MyDood</h3>
              </div>
              <div className=" card2">
                <a href="https://minotaurius.github.io/Certified_Tomatoes/">
                  <img
                    className="workimg"
                    id="cert"
                    src={fresh}
                    width="100%"
                    alt=""
                  />
                </a>
                <h3 className="proj-titles">Certified Tomatoes</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="resume" className="card-container2">
          <h2>Resume</h2>
          <div className="download">
            <a href={myPDF} download="MustafaA-Resume.pdf">
              <button className="pdf">Download Here</button>
            </a>
          </div>
        </div>
        <div id="contact" className="card-container2">
          <h2> Contact Me</h2>
          <p>
            <a className="icons" href="mailto:steef136@gmail.com">
              <FontAwesomeIcon icon={faPaperPlane} size="6x" />
            </a>
            <a className="icons" href="https://GitHub.com/KappaMustafa">
              <FontAwesomeIcon icon={faGithub} size="6x" />
            </a>
            <a
              className="icons"
              href="https://www.linkedin.com/in/mustafa-aboghalyoun-059784253/"
            >
              <FontAwesomeIcon icon={faLinkedin} size="6x" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
