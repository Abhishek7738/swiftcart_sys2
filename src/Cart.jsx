import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import "./home.css";

const Cart = ({ totalCartItems }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(totalCartItems);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * item.quantity;
    }
    return total;
  };

  return (
    <div className="cart-container">
      <table className="cart-items">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price * item.quantity}</td> {/* Calculate the total here */}
              <td>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <p>Total: ₹{calculateTotalPrice()}</p> {/* Display the total here */}
        <button className="checkout-button" onClick={openModal}>
          Checkout
        </button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Cart;
