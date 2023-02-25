import React, { Fragment } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink className="navbar-brand ms-4" href="#"/>
        Kingual®
      
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" href="#"/>
              Principal <span className="sr-only">(current)</span>
            
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#"/>
              Staff
            
          </li>
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            />
              Cursos
            
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" href="#"/>
                👑 Inglés
              
              <NavLink className="dropdown-item" href="#"/>
                🎎 Chino
              
              <NavLink className="dropdown-item" href="#"/>
                {" "}
                🥑 Portugés
              
              <NavLink className="dropdown-item" href="#"/>
                {" "}
                ⛄ Ruso
              
              <div className="dropdown-divider"></div>
              <NavLink className="dropdown-item" href="#"/>
                {" "}
                🍺 Español para extranjeros
              
            </div>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link justify-content-end" href="#"/>
              <CartWidget />
            
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
