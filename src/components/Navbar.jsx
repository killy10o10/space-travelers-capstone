import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from '../assets/planet.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="navbar">
        <NavLink to="/">
          <h1 className="logo">
            <img src={logo} alt="logo" />
            Space Travelers&apos; Hub
          </h1>
        </NavLink>
        <div>
          <ul className="list">
            <li>
              <NavLink
                to="/Rockets"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Missions"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                Missions
              </NavLink>
            </li>
            <hr />
            <li>
              <NavLink
                to="/Myprofile"
                className={({ isActive }) => (isActive ? 'active-link' : 'link')}
              >
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Navbar;
