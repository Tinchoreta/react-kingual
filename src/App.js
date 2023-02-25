import './App.css';
import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Hola, bienvenido al carrito de compras de Kingual Education®.' />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting='Categorias de cursos' />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detalle' element={<ItemDetailsContainer />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
