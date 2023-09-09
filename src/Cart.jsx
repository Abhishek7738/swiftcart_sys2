import React, { useState } from "react";
import Modal from "./Modal";
import "./home.css";

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Assume you have a cartItems array with selected items in your state.
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Nike Shoes",
      price: 20.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Goggles",
      price: 15.49,
      quantity: 1,
    },
    // Add more items as needed.
  ]);

  // Calculate the total price of items in the cart.
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
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
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-summary">
        <p>Total: ${totalPrice.toFixed(2)}</p>
        <button className="checkout-button" onClick={openModal}>
          Checkout
        </button>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Cart;
