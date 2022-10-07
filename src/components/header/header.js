import React from "react";
import { NavLink } from "react-router-dom";

import "./header.css";

function Header() {
  return (
    <header>
      <div>
        <NavLink to="/" className="title">
          Mustafa A
        </NavLink>
      </div>
      <div className="links">
        <nav>
          <NavLink to="/" className="routes">
            About
          </NavLink>
          <NavLink to="/Resume" className="routes">
            Resume
          </NavLink>
          <NavLink to="/My-Work" className="routes">
            My Work
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
