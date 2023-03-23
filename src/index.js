import React from 'react';
import ReactDOM from 'react-dom/client';
import Loader from './componentes/Loader/Loader';
import './index.css';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // o cualquier otro elemento raíz de tu aplicación





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Loader loading={true} />


  </React.StrictMode>
);


