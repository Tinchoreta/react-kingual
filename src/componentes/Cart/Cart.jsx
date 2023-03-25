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
      </div>
      {cartItems.length > 0 ? (
        <>
          {
          cartItems.map((curso) => (
            <div className="cart-item" key={curso.item.id}>
              <span className="cart-item-name">{curso.item.nombre}</span>
              <span className="cart-item-quantity"> {curso.quantity === undefined ? '' : `Unidades: ${(+curso.quantity)}`}</span>
              <span className="cart-item-price"> {curso.item.precio === undefined ? '' : `Precio unitario: $ ${(+curso.item.precio).toFixed(2)}`}</span>
              <span className="cart-item-subtotal"> {curso.item.precio === undefined ? '' : `Subtotal: $ ${(+curso.item.precio * curso.quantity).toFixed(2)}`}</span>
              <button className="cart-item-remove" onClick={() => removeProduct(curso.item.id)}>
                Quitar
              </button>
            </div>
          ))
          }
          <div className='cart-total-courses'>
            <span className="cart-total">{`Total de cursos: ${totalCartItems}`}</span>
            <span className="cart-total-price">{`Total: $${parseFloat(total).toFixed(2)}`}</span>
          </div>
        </>
      ) : (
        <div className='no-items-to-show'>Carrito vacío</div>
      )}

      {cartItems.length > 0 &&
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
      }

        <button className="cart-button cart-button-continue">
          <Link to="/">Seguir comprando</Link>
        </button>


      {/* Checkout abre ventana modal  */}

      <Modal isOpen={showModal} onRequestClose={handleCloseModal}>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Resumen de Compra</h3>
              <span className="modal-close" onClick={handleCloseModal}>
              </span>
            </div>
            <div className="modal-body">
              {cartItems.map((curso) => (
                <div className="modal-item" key={curso.item.id}>
                  <span className="modal-item-name">{curso.item.nombre}</span>
                  <span className="modal-item-price">{`$${(+curso.item.precio).toFixed(2)}`}</span>
                  <span className="modal-item-quantity">cantidad: {curso.quantity}</span>
                  <span className="modal-item-subtotal"> {curso.item.precio === undefined ? '' : `Subtotal: $ ${(+curso.item.precio * curso.quantity).toFixed(2)}`}</span>
                </div>
              ))}
            </div>
            <div className="modal-total">
              <span className="modal-total-label">Total:</span>
              <span className="modal-total-amount">{`$${total.toFixed(2)}`}</span>
            </div>
            <div className="modal-buttons">
              <button className="modal-button-close" onClick={handleCloseModal}>
                Cerrar
              </button>

            </div>
          </div>
        </div>
      </Modal>

    </div >
  );
}

export default Cart;
