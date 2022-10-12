import React from "react";

import "./footer.css";
import reactLogo from "./logo192.png";
function Footer() {
  return (
    <div>
      <footer>
        <main>
          <div className="creds">
            <h3>© 2022 Mustafa A.</h3>
            <p>
              <img title="" src={reactLogo} width="25%" alt="" />
            </p>
          </div>
        </main>
      </footer>
    </div>
  );
}

export default Footer;
