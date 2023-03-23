
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'; 
import './Cart.css';

function Cart() {
  const { cartItems, removeProduct, clearCart, totalQuantity } = useCartContext();

  const total = cartItems.reduce((acc, item) => { // sumariza los precios de los cursos en el carrito.
    if (item && item.precio !== undefined) {
      return acc + (+item.precio); // +item.precio convierte en número al precio en caso de que sea un string
    }
    return acc;
  }, 0);

  // Manejo de la ventana modal de checkout 

  
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <span className="cart-total">{`Total: $${total.toFixed(2)}`}</span>
      </div>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <span className="cart-item-name">{item.nombre}</span>
          <span className="cart-item-price"> {item.precio === undefined?'': `$${(+item.precio).toFixed(2)}`}</span>
          <button className="cart-item-remove" onClick={() => removeProduct(item)}>
            Quitar
          </button>
        </div>
      ))}
      <div className="cart-buttons">
      <button className="cart-button cart-button-buy" onClick={handleShowModal}>
          Comprar cursos
        </button>
        {}
        <button className="cart-button cart-button-clear" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="cart-button cart-button-continue">
          <Link to="/">Seguir comprando</Link>
        </button>
      </div>

      {/* checkout abre ventana modal  */}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Resumen de Compra</h3>
            {cartItems.map((item) => (
              <div className="modal-item" key={item.id}>
                <span>{item.nombre}</span>
                <span>{`$${(+item.precio).toFixed(2)}`}</span>
              </div>
            ))}
            <div className="modal-total">
              <span>Total:</span>
              <span>{`$${total.toFixed(2)}`}</span>
            </div>
            <button className="modal-button-close" onClick={handleCloseModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>


    
  );
}

export default Cart;
