import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <main>
          <div className="contact">
            <h2>Contact Me:</h2>
            <p>
              <a href="mailto:steef136@gmail.com">
                <FontAwesomeIcon icon={faPaperPlane} size="2x" border />
              </a>
              <a href="https://GitHub.com/KappaMustafa">
                <FontAwesomeIcon icon={faGithub} size="2x" border />
              </a>
              <a href="https://www.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" border />
              </a>
            </p>
          </div>
          <div className="creds">
            <h3>Made by Mustafa</h3>
            <p>Using React</p>
          </div>
        </main>
      </footer>
    </div>
  );
}

export default Footer;
