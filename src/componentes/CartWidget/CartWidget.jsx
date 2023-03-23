import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/CartContext'; 

const CartWidget = () => {

  const { totalQuantity } = useCartContext();
  return (
        

    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      <span>{totalQuantity()}</span>


    </div>

  )
}

export default CartWidget