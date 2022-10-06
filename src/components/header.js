import React from "react";
// import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <h1>Mustafa A</h1>
      <div className="links">
        <nav>
          <h3>Resume</h3>
          <h3>About Me</h3>
          <h3>My Work</h3>
        </nav>
      </div>
    </header>
  );
}

export default Header;
