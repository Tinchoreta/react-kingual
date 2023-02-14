import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    //12 items harcodeado
    //profe no puedo hacer andar Fontawesome. Importo el CDN y hago todo correcto pero no hay forma
    
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      12
    </div>

  )
}

export default CartWidget