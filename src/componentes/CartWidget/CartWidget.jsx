import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../context/cartContext'

const CartWidget = () => {

  const contextCarrito = useContext(CartContext);

  return (
    //12 items harcodeado
    

    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      12
    </div>

  )
}

export default CartWidget