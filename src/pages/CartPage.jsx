import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import '../assets/css/CartPage.css'

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price of cart items
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={item.id || index} className="cart-item">
              <img 
                src={item.image || '/path/to/default-image.jpg'} 
                alt={item.name} 
                className="cart-item-img" 
              />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-summary">
        <h3>Total: <span className="total-price">${totalPrice.toFixed(2)}</span></h3>
      </div>
      <div className="cart-actions">
        <Link to="/checkout">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
