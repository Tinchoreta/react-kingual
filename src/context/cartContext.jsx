import React, {createContext, useState} from 'react'


const CartContext = createContext({
    value: []
});
  

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
    }

    //5) Total de productos en el carrito

const totalQuantity = ()=>{

    let total = 0;
    cartItems.forEach((item)=> total += (item.quantity));
    return total;
}

    return(

        <CartContext.Provider value={{cartItems,addProduct, removeProduct, clearCart, IsInCart}}>

        </CartContext.Provider>

    )
}

export {CartProvider}
export default CartContext;
