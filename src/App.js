import './App.css';
import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import CartWidget from './componentes/CartWidget/CartWidget';

function App() {
  return (
   <>
    <NavBar/>
    <ItemListContainer/>
    <CartWidget/>
   </>

  );
}

export default App;
