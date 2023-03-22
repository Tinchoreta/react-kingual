import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './componentes/NavBar/NavBar.jsx';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer.jsx';
import ItemDetailsContainer from './componentes/ItemDetailsContainer/ItemDetailsContainer.jsx';
import Cart from './componentes/Cart/Cart.jsx';
import NotFoundPage from './componentes/NotFoundPage/NotFoundPage';
import CartProvider from './context/CartContext';
import Footer from './componentes/Footer/Footer';
import ItemBase from './componentes/ItemBase/ItemBase';
 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDim_mG0_vC8FwSzhygRVC7eucwCx4TLIk",
  authDomain: "kingual.firebaseapp.com",
  projectId: "kingual",
  storageBucket: "kingual.appspot.com",
  messagingSenderId: "725176992363",
  appId: "1:725176992363:web:a002688b874422cf2da72e",
  measurementId: "G-C11LG3CYXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  return (

    
      <>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Hola, bienvenido al carrito de compras de Kingual Education®.' />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting='Categorias de cursos' />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailsContainer />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </CartProvider>
      <ItemBase />
    </BrowserRouter>
    </>
  );
}

export default App;
