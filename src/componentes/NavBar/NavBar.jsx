import React, { Fragment } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand ms-4" href="#">
        Kingual®
      </a>
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
            <a className="nav-link" href="#">
              Principal <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Staff
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cursos
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                👑 Inglés
              </a>
              <a className="dropdown-item" href="#">
                🎎 Chino
              </a>
              <a className="dropdown-item" href="#">
                {" "}
                🥑 Portugés
              </a>
              <a className="dropdown-item" href="#">
                {" "}
                ⛄ Ruso
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                {" "}
                🍺 Español para extranjeros
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link justify-content-end" href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
