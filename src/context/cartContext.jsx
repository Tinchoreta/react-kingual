import React, {createContext, useState, useContext} from 'react'

const CartContext = createContext({value: []});

export const useCartContext = () => useContext(CartContext); 
  

const CartProvider = ({children})=>{

    //Estado del carrito
    const [cartItems, setCartItems] = useState([]);

    //Funciones

    //1) Vaciar carrito

    const clearCart = ()=>{
        setCartItems([])
    }

    //2) Verificar si un producto ya está en el carrito

    const isInCart = (id) => {
        console.log("ID a buscar en el carrito:", id);
        const foundProduct = cartItems.find((product) => Number(product.item.id) === Number(id));
        console.log("Producto encontrado:", foundProduct);
        return foundProduct ? true : false;
      };

    //3) Eliminar un producto del carrito

    const removeProduct = (id)=> {

        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(newCartItems);

    }

    //4) Agregar un producto al carrito

    const addProduct = (item, quantity) => {
        console.log(quantity + " " + item.id);
      
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
      
        console.table(cartItems);
      
        const itemInCart = cartItems.find((cartItem) => cartItem.item.id === item.id);
        console.log(
          `Stock de ${item.nombre}: ${itemInCart ? itemInCart.quantity : 0} unidades`
        );
      };

    //5) Total de productos en el carrito

const totalQuantity = ()=>{

    let total = 0;
    cartItems.forEach((item)=> total += (item.quantity));
    return total;
}

    return(

        <CartContext.Provider value={{
            cartItems,
            addProduct, 
            removeProduct, 
            clearCart, 
            isInCart}}>

            {children}
             
        </CartContext.Provider>

    )
}

export default CartProvider;

