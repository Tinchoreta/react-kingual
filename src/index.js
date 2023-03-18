import React from 'react';
import ReactDOM from 'react-dom/client';
import Loader from './componentes/Loader/Loader';
import './index.css';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Loader loading= {true} />
    

  </React.StrictMode>
);


