import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from '../assets/planet.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="navbar">
        <h1 className="logo">
          <img src={logo} alt="logo" />
          Space Travelers&apos; Hub
        </h1>
        <div>
          <ul className="list">
            <li>
              <NavLink to="/">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/mission">Missions</NavLink>
            </li>
            <hr />
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
