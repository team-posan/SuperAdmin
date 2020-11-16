import React from "react";
import "./Navbar.css";
import Dashboard from "../assets/Group 8.svg";
import Store from "../assets/Group 9.svg";
import Stock from "../assets/Group 10.svg";
import List from "../assets/Group 11.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-wrap">
      <div className="nav-logo">POSAN</div>
      <div className="nav-link">
        <Link to="/dashboard">
          <div className="link">
            <img src={Dashboard} className="icon" />
          </div>
        </Link>
        <Link to="/stock">
          <div className="link">
            <img src={Stock} className="icon" />
          </div>
        </Link>
        <Link to="/store">
          <div className="link">
            <img src={Store} className="icon" />
          </div>
        </Link>
        <Link to="/user">
          <div className="link">
            {/* <img src={Store} className="icon" /> */}
            User
          </div>
        </Link>
        <Link to='/user'>
        <div className="link">
          <img src={List} className="icon" />
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
