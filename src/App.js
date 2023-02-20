import './App.css';
import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
//import CartWidget from './componentes/CartWidget/CartWidget';
//import Item from './componentes/Item/Item';
import ItemList from './componentes/ItemList/ItemList';

function App() {
  
  return (
   <>
    <NavBar/>
    <ItemListContainer greeting='Hola, bienvenido al carrito de compras de Kingual Education®.'/>
    <ItemList items= ""/>
   </>

  );
}

export default App;
