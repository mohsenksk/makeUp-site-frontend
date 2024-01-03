import React, { useState } from 'react';

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  const handleAddToCart = (item: string) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveFromCart = (item: string) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const handleSubmit = () => {
    // Logic to process payment and submit the cart
    // You can add your own implementation here
    console.log('Cart submitted!');
  };

  return (
    <div>
      <h1>Customer Cart Page</h1>
      <h2>Cart Items:</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item}>
              {item}
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Cart;
