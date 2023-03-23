import React, { Fragment } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand ms-4" to='/'>
        Kingual Education®
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to='/'>Principal <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">

            <div className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cursos
            </div>

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

              <NavLink className="dropdown-item" to='/categoria/english'>👑 Inglés</NavLink>
              {/* <NavLink className="dropdown-item" to='/categoria/chinese'>🎎 Chino </NavLink> */}
              <NavLink className="dropdown-item" to='/categoria/portuguese'>
                🥑 Portugés
              </NavLink>
              <NavLink className="dropdown-item" to='/categoria/russian'>
                ⛄ Ruso
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" to='/categoria/spanish'>
                🍺 Español para extranjeros
              </NavLink>
            </div>
          </li>
          <li className="nav-item">

            <NavLink className="nav-link" to='/cart'>
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
