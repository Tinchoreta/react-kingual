import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {

  const { totalQuantity } = useCartContext();
  return (


    <div className='cart-holder'>
      <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
      <span className='cart-count'>{totalQuantity()}</span>


    </div>

  )
}

export default CartWidget