import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './componentes/NavBar/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer.jsx';
import Cart from './componentes/Cart/Cart.jsx';
import NotFoundPage from './componentes/NotFoundPage/NotFoundPage';
import CartContext from './context/CartContext';
 



function App() {

  return (

    <CartContext.Provider value={[]}>
      
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Hola, bienvenido al carrito de compras de Kingual Education®.' />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting='Categorias de cursos' />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailsContainer />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

      </BrowserRouter>
      
    </CartContext.Provider>
  );
}

export default App;
