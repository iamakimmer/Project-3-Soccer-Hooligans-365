import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link heading-title" to="/competition/:id">
                Standings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link heading-title" to="/Scorers">
                Scorers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link heading-title" to="/livescores">
                Live Scores
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
