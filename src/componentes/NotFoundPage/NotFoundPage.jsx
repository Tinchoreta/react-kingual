import React from 'react';
import { hydrate } from 'react-dom';
import { Link } from 'react-router-dom';

const pathImg = require.context('../../assets/img/', true)

// Componente principal de la página 404
const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Error: No se encontró la página</h1>
      <Link to={`/`}>
        <img src={pathImg(`./404.jpg`)} alt="Imagen de error 404" />
      </Link>
      {/* <p>Lo sentimos, parece que la página que estás buscando no existe o ha sido eliminada. Pero no te preocupes, te invitamos a explorar nuestro sitio web para encontrar más recursos y herramientas para mejorar tus habilidades en idiomas.</p>
      <a>Haz clic aquí para explorar nuestras opciones de cursos y recursos gratuitos</a> */}
    </div>
  );
};

// Renderizar la página 404 en el DOM
if (typeof window !== 'undefined') {
  hydrate(<NotFoundPage />, document.getElementById('root'));
}

export default NotFoundPage