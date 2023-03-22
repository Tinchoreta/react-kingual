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

    const IsInCart = (id)=> {
        return cartItems.find((product)=> product.id === id)? true: false; 
        
    }

    //3) Eliminar un producto del carrito

    const removeProduct = (id)=> {

        const newCartItems = cartItems.filter((cartItem) => cartItems.id !== id);
        setCartItems(newCartItems);

    }

    //4) Agregar un producto al carrito

    const addProduct = (item, quantity)=>{
        console.log (quantity + " " + item.id)
        if(IsInCart(item.id)){
            setCartItems(
                cartItems.map(
                    product => product.id === item.id ? 
                {...product, quantity: product.quantity + quantity}
                :
                product
            )
            );
        }
        else {

            setCartItems([...cartItems,{item, quantity}])

        }
        console.log(cartItems)
    }

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
            IsInCart}}>

            {children}
             
        </CartContext.Provider>

    )
}

export default CartProvider;

