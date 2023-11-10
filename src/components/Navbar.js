import React from "react";
import { BiBarcode } from "react-icons/bi";
import { GiBullseye } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { LuPalette } from "react-icons/lu";
import { TbMessageDollar } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul className="nav-menu">
        <li className="nav-item">
          <a className="nav-link">
            <BiBarcode className="nav-icon" />
            <div className="link-text">ABOUT ME</div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <GiBullseye className="nav-icon" />
            <div className="link-text">SKILLS</div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <CgNotes className="nav-icon" />
            <div className="link-text">RESUME</div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <LuPalette className="nav-icon" />
            <div className="link-text">PORTFOLIO</div>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <TbMessageDollar className="nav-icon" />
            <div className="link-text">FEEDBACK</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
