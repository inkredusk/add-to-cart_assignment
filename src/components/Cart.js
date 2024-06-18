import React, { useState } from 'react';
import '../styles/cart.css';
import Modal from './Modal';

const Cart = ({ cart, setCart, handleChange, handleRemove, totalPrice, showModal, setShowModal, modalMessage, setModalMessage }) => {
  const [selectedItems, setSelectedItems] = useState(new Set(cart.map(item => item.id)));

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
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cart.map(item => item.id)));
    }
  };

  const handleProceed = () => {
    if (selectedItems.size > 3) {
      setModalMessage('You can select up to 3 products only.');
      setShowModal(true);
    } else if (selectedItems.size <= 3 && selectedItems.size > 0) {
      setModalMessage('Purchase Successful!');
      setShowModal(true);
    } else {
      setModalMessage('Please select at least one product.');
      setShowModal(true);
    }
  };

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
              <div className='cart_title'><p>{item.product.name}</p></div>
              <div className='cart_quantity'>
                <button className="q_btn" onClick={() => handleChange(item, +1)}> + </button>
                <button className="q_btn">{item.quantity}</button>
                <button className="q_btn" onClick={() => handleChange(item, -1)}> - </button>
                <button className="delete" onClick={() => handleRemove(item.id)}>Delete</button>
                <span>₹{item.product.price}</span>
              </div>
            </div>
          </div>
          <div className='container_seperate'></div>
        </div>
      ))}
      <div className='total'>
        <span>Total price of your cart</span>
        <span className='total_price'>₹ {totalPrice}</span> {/* Use totalPrice prop */}
      </div>
      <button className="proceed" onClick={handleProceed}>
        Proceed
      </button>
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
    </article>
  );
};

export default Cart;

