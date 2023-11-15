import React from "react";
import { BiBarcode } from "react-icons/bi";
import { GiBullseye } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { LuPalette } from "react-icons/lu";
import { TbMessageDollar } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import logo from "../images/jrome.png";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" className="navbar-logo">
        <img className="logo" src={logo} alt="jRome logo" />
        <span>R.</span>Dixon
      </NavLink>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            <BiBarcode className="nav-icon" />
            <div className="link-text">ABOUT ME</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skills" className="nav-link">
            <GiBullseye className="nav-icon" />
            <div className="link-text">SKILLS</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className="nav-link">
            <LuPalette className="nav-icon" />
            <div className="link-text">PORTFOLIO</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" className="nav-link">
            <CgNotes className="nav-icon" />
            <div className="link-text">RESUME</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/feedback" className="nav-link">
            <TbMessageDollar className="nav-icon" />
            <div className="link-text">FEEDBACK</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
