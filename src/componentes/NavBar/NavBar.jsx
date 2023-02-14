import React, { Fragment } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand ms-4" href="#">
        Kingual®
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Principal <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Staff
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cursos
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                👑 Inglés
              </a>
              <a class="dropdown-item" href="#">
                🎎 Chino
              </a>
              <a class="dropdown-item" href="#">
                {" "}
                🥑 Portugés
              </a>
              <a class="dropdown-item" href="#">
                {" "}
                ⛄ Ruso
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                {" "}
                🍺 Español para extranjeros
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link justify-content-end" href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
