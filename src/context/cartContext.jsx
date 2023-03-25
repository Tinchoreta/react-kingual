import React, { createContext, useState, useContext } from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore";

const CartContext = createContext( null );

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {

  //Estado del carrito
  const [cartItems, setCartItems] = useState([]);

  //Funciones

  //1) Vaciar carrito

  const clearCart = () => {
    setCartItems([])
  }

  //2) Verificar si un producto ya está en el carrito

  const isInCart = (id) => {
    
    const foundProduct = cartItems.find((product) => Number(product.item.id) === Number(id));
    
    return !!foundProduct;  //? true : false;
  };

  //3) Eliminar un producto del carrito

  const removeProduct = (id) => {

    const newCartItems = cartItems.filter((cartItem) => cartItem.item.id !== id);
    setCartItems(newCartItems);

  }

  //4) Agregar un producto al carrito

  const addProduct = (item, quantity) => {
    

    if (isInCart(item.id)) {
      const updatedCartItems = cartItems.map((cartItem) => {
        return cartItem.item.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem;
      });
      setCartItems(updatedCartItems);
      
    } else {
      setCartItems([...cartItems, { item, quantity }]);
      
    }



    const itemInCart = cartItems.find((cartItem) => Number(cartItem.item.id) === item.id);
    
  };

  //5) Total de productos en el carrito

  const calculateTotalQuantity = () => {

    let total = 0;
    cartItems.forEach((item) => total += (item.quantity));
    return total;
  }

  //6) Total en $$ de los productos añadidos al carrito

    const calculateTotalCartPrice = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const curso = cartItems[i];
      if (curso.item && curso.quantity) {
        const itemTotal = curso.item.precio * curso.quantity;
        total += itemTotal;
      }
    }
    return total;
  };

  //7) Guardar datos del pedido en BD

  const saveOrder = (clientName= 'Martín Reta', clientMail= 'tinchoreta@gmail.com')=>{
    const todayDate = new Date().toLocaleString();
    const total = calculateTotalCartPrice();
    const order = {
      todayDate,
      client:{
        client: clientName,
        email: clientMail,
        },
      items: cartItems,
      totalBuy: total 
    }
    const db = getFirestore();
    const orderCol = collection(db,'orders');
    addDoc(orderCol, order);
        
  }

  return (

    <CartContext.Provider value={{
      cartItems,
      addProduct,
      removeProduct,
      clearCart,
      isInCart,
      calculateTotalQuantity,
      calculateTotalCartPrice,
      saveOrder
    }}>

      {children}

    </CartContext.Provider>

  )
}

export default CartProvider;

