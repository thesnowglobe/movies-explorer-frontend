import "./NavTab.css";
import React from "react";

const NavTab = () => {
  return (
    <div className="navtab">
      <a className="navtab__link" href="#about-project">About</a>
      <a className="navtab__link" href="#techs">Technologies</a>
      <a className="navtab__link" href="#student">Student</a>
    </div>
  );
};

export default NavTab;