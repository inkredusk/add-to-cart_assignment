import React, { useEffect, useState } from 'react';
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  
  // Initialize selectedItems with all item IDs from cart
  const [selectedItems, setSelectedItems] = useState(new Set(cart.map(item => item.id)));

  const handlePrice = () => {
    let total = 0;
    cart.forEach(item => {
      if (selectedItems.has(item.id)) {
        total += item.amount * item.price;
      }
    });
    setPrice(total);
  };

  const handleRemove = (id) => {
    const filteredCart = cart.filter(item => item.id !== id);
    setCart(filteredCart);
    setSelectedItems(prev => {
      const updated = new Set(prev);
      updated.delete(id);
      return updated;
    });
  };

  const toggleSelectItem = (id) => {
    setSelectedItems(prev => {
      const updated = new Set(prev);
      if (updated.has(id)) {
        updated.delete(id);
      } else {
        updated.add(id);
      }
      return updated;
    });
  };

  const toggleSelectAll = () => {
    if (selectedItems.size === cart.length) {
      setSelectedItems(new Set()); // Deselect all if all are currently selected
    } else {
      const allIds = new Set(cart.map(item => item.id));
      setSelectedItems(allIds); // Select all
    }
  };

  // Update selectedItems whenever cart changes
  useEffect(() => {
    setSelectedItems(new Set(cart.map(item => item.id)));
  }, [cart]);

  useEffect(() => {
    handlePrice();
  }, [cart, selectedItems]);

  return (
    <article>
      <button className="toggle-select" onClick={toggleSelectAll}>
        {selectedItems.size === cart.length ? 'Deselect All' : 'Select All'}
      </button>
      {cart?.map(item => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <input 
              type="checkbox"
              checked={selectedItems.has(item.id)}
              onChange={() => toggleSelectItem(item.id)}
            />
            <div className='img1'><img src={item.img} alt={item.title} /></div>
            <div className='cart_desc'>
              <div className='cart_title'><p>{item.title}</p></div>
              <div className='cart_quantity'>
                <button className="q_btn" onClick={() => handleChange(item, +1)}> + </button>
                <button className="q_btn">{item.amount}</button>
                <button className="q_btn" onClick={() => handleChange(item, -1)}> - </button>
                <button className="delete" onClick={() => handleRemove(item.id)}>Delete</button>
                <span>₹{item.price}</span>
              </div>
            </div>
          </div>
          <div className='container_seperate'></div>
        </div>
      ))}
      <div className='total'>
        <span>Total price of your cart</span>
        <span className='total_price'>₹ {price}</span>
      </div>
    </article>
  );
};

export default Cart;

