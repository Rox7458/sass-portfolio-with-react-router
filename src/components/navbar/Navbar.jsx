import React from "react";
import { Link } from "react-router-dom";
import navbarStyle from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbarStyle.container}>
      <nav className={navbarStyle.nav}>
        <Link className={navbarStyle.navLink} to="/">
          HOME
        </Link>
        <Link className={navbarStyle.navLink} to="/about">
          ABOUT ME
        </Link>
        <Link className={navbarStyle.navLink} to="/projects">
          MY PROJECTS
        </Link>
        <Link className={navbarStyle.navLink} to="/contacts">
          CONTACT
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
