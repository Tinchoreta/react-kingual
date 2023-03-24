
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Modal from 'react-modal';
import './Cart.css';

function Cart() {
  const { cartItems, removeProduct, clearCart, calculateTotalQuantity,
      calculateTotalCartPrice } = useCartContext();

const total = calculateTotalCartPrice();

const totalCartItems = calculateTotalQuantity();

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
        <span className="cart-total">{`Total: $${parseFloat(total).toFixed(2)}`}</span>
      </div>
      {cartItems.length > 0 ? cartItems.map((curso) => (
        <div className="cart-item" key={curso.item.id}>
          <span className="cart-item-name">{curso.item.nombre}</span>
          <span className="cart-item-price"> {curso.item.precio === undefined ? '' : `$${(+curso.item.precio).toFixed(2)}`}</span>
          <span className="cart-item-quantity"> {curso.quantity === undefined ? '' : `Unidades: ${(+curso.quantity)}`}</span>
          <button className="cart-item-remove" onClick={() => removeProduct(curso)}>
            Quitar
          </button>

        </div>
      )) : <div>No hay items</div>
      }
      <div className='cart-total-courses'>
        <span className="cart-total">{`Total de cursos: ${totalCartItems}`}</span>
      </div>

      <div className="cart-buttons">
        <button className="cart-button cart-button-clear" onClick={clearCart}>
          Vaciar carrito
        </button>
        <button className="cart-button cart-button-continue">
          <Link to="/">Seguir comprando</Link>
        </button>
        <button className="cart-button cart-button-buy" onClick={handleShowModal}>
          Comprar cursos
        </button>



      </div>

      {/* checkout abre ventana modal  */}

      <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
        <div className="modal">
          <div className="modal-content">
            <h3>Resumen de Compra</h3>
            {cartItems.map((curso) => (
              <div className="modal-item" key={curso.item.id}>
                <span>{curso.item.nombre}</span>
                <span>{`$${(+curso.item.precio).toFixed(2)}`}</span>
                <span>{curso.quantity}</span>
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
      </Modal>
    </div>



  );
}

export default Cart;
