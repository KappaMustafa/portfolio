import React from "react";
import "./resume.css";
import badge from "./badge.png";
import myPDF from "./updated-resume.pdf";
function Resume() {
  return (
    <div>
      <div className="full">
        <h1 className="header1">Mustafa's Resume</h1>
        <div className="resume-container">
          <div className="profile">
            <h2>Profile</h2>
            <p>
              A dedicated, self motivated, constantly-improving, full-stack web
              developer with a passion for design and development with great
              attention to details. Looking to enter the field to continue
              advancing my skills and my understanding of the web as well as
              programming in general. Great at listening and communicating ideas
              within groups.
            </p>
          </div>
          <div className="experience">
            <h2>Experience</h2>
            <li>HTML, CSS, JavaScript, and React.</li>
            <li>jQuery and Bootstrap.</li>
            <li>SQL and NoSQL.</li>
            <li>Git.</li>
          </div>
          <div className="apps">
            <h2>Apps</h2>
            <li>Poke-Slap: A full-stack web game.</li>
            <li>MyDood: A social app made in React. </li>
            <li>Fresh Tomatoes: A web game made in JS.</li>
          </div>
          <div className="skills">
            <h2> Skills</h2>
            <li>Excellent multi-tasking ability</li>
            <li>Fast Learner</li>
            <li>Self motivated</li>
            <li>Great in team enviorments</li>
          </div>
          <div className="coding-experience">
            <h2>Coding Experience</h2>
            <li>JavaScript, Node.js, jQuery, NPM, and Git</li>
            <li>HTML, CSS, and Bootstrap</li>
            <li>MySQL and mongoDB</li>
          </div>
          <div className="ed">
            <h2>Education</h2>
            <p>
              University Of Minnesota, Coding bootcamp: June, 2022 - September,
              2022
            </p>
          </div>
          <div className="badge">
            <h2>View my certification here:</h2>
            <a href="https://www.credly.com/badges/72bdec96-405a-4b64-9b31-56abf26a6514/public_url">
              <img
                title="Certification Badge"
                src={badge}
                width="30%"
                alt="certification badge"
              />
            </a>
          </div>
          <div className="download">
            <h2> Download a PDF of my resume here:</h2>
            <a href={myPDF} download="Mustafas-Resume.pdf">
              <button className="pdf">Download Here</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
