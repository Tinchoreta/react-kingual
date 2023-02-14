import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-blue bg-light">
    <a class="navbar-brand ms-4" href="#">Kingual®</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Principal <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Staff</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cursos
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">👑 Inglés</a>
            <a class="dropdown-item" href="#">🎎 Chino</a>
            <a class="dropdown-item" href="#"> 🥑 Portugés</a>
            <a class="dropdown-item" href="#"> ⛄ Ruso</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#"> 🍺 Español para extranjeros</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Carrito</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Búsqueda</button>
      </form>
    </div>
  </nav>
  )
}

export default NavBar