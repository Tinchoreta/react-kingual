import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';


const pathImg = require.context('../../assets/img/', true)

// Componente principal de la página 404
const NotFoundPage = () => {
  return (
    // <div>
    //   <h1>404 Error: No se encontró la página</h1>
    //     <Link to="/" target="_self">
    //       <img src={pathImg(`./404.jpg`)} alt="Imagen de error 404" />
    //     </Link>

    //     <p>Lo sentimos, parece que la página que estás buscando no existe o ha sido eliminada. Pero no te preocupes, te invitamos a explorar nuestro sitio web para encontrar más recursos y herramientas para mejorar tus habilidades en idiomas.</p>
    //   <a href="/">Haz clic aquí para explorar nuestras opciones de cursos y recursos gratuitos</a>
    
    // </div>


    <div className="error-container">
    <h1 className="error-title">404 Error: No se encontró la página</h1>
    <Link to="/" target="_self">
    
           <img src={pathImg(`./404.jpg`)} alt="Imagen de error 404" />
    
    </Link>
    <p className="error-text">Lo sentimos, parece que la página que estás buscando no existe o ha sido eliminada. Pero no te preocupes, te invitamos a explorar nuestro sitio web para encontrar más recursos y herramientas para mejorar tus habilidades en idiomas.</p>
    <Link className="error-link" to="/">Haz clic aquí para explorar nuestras opciones de cursos y recursos gratuitos</Link>
  </div>
  );
};



export default NotFoundPage