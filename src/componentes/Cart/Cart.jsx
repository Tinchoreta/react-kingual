
import { useCartContext } from '../../context/CartContext'; 
import './Cart.css';

function Cart() {
  const { cartItems, addProduct, removeProduct, clearCart } = useCartContext();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Carrito de Compras</h2>
        <span className="cart-total">{`Total: $${total.toFixed(2)}`}</span>
      </div>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <span className="cart-item-name">{item.name}</span>
          <span className="cart-item-price">{`$${item.price.toFixed(2)}`}</span>
          <button className="cart-item-remove" onClick={() => removeProduct(item)}>
            Quitar
          </button>
        </div>
      ))}
      <div className="cart-buttons">
        <button className="cart-button cart-button-add" onClick={addProduct}>
          Agregar
        </button>
        <button className="cart-button cart-button-clear" onClick={clearCart}>
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default Cart;
