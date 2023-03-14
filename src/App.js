import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './componentes/NavBar/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer.jsx';
import Cart from './componentes/Cart/Cart.jsx';
import NotFound from './componentes/NotFound/NotFound';
import cartContext from './context/CartContext';



function App() {

  return (

    <cartContext.Provider value={[]}>

      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Hola, bienvenido al carrito de compras de Kingual Education®.' />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting='Categorias de cursos' />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailsContainer />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    
    </cartContext.Provider>
  );
}

export default App;
