import React, { useState, useEffect } from 'react';
import '../styles/cart.css';
import Modal from './Modal';
<<<<<<< Updated upstream
import { getTotalPrice, getAllCartItems } from '../api/endpoints'; // Import the existing API endpoints
=======
import Checkout from './Checkout'; // Import the Checkout component
import { getTotalPrice, deleteItemById } from '../api/endpoints'; // Import deleteItemById API call
>>>>>>> Stashed changes

const Cart = ({ cart, setCart, handleChange, handleRemove, showModal, setShowModal, modalMessage, setModalMessage }) => {
  const [selectedItems, setSelectedItems] = useState(new Set(cart.map(item => item.id)));
  const [selectedTotalPrice, setSelectedTotalPrice] = useState(0);

  useEffect(() => {
    fetchSelectedTotalPrice();
  }, [selectedItems, cart]); // Only re-run the effect if selectedItems or cart changes

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

  const fetchSelectedTotalPrice = async () => {
    try {
<<<<<<< Updated upstream
      // Get the total price of all items
      const total = await getTotalPrice();
      
      // Filter cart items based on selectedItems and calculate the price of selected items
=======
>>>>>>> Stashed changes
      const selectedTotal = cart
        .filter(item => selectedItems.has(item.id))
        .reduce((sum, item) => sum + item.product.price * item.quantity, 0);
        
      setSelectedTotalPrice(selectedTotal);
    } catch (error) {
      console.error('Error fetching selected total price:', error);
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

<<<<<<< Updated upstream
=======
  if (showCheckout) {
    return (
      <Checkout 
        selectedItems={selectedItems} 
        cart={cart} 
        totalPrice={selectedTotalPrice} 
        onBack={() => setShowCheckout(false)} 
      />
    );
  }

>>>>>>> Stashed changes
  return (
    <article>
      <button className="toggle-select" onClick={toggleSelectAll}>
        {cart.length === 0 || selectedItems.size === cart.length ? 'Deselect All' : 'Select All'}
      </button>
      {cart?.map(item => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <input 
              type="checkbox"
              checked={selectedItems.has(item.id)}
              onChange={() => toggleSelectItem(item.id)}
            />
            <div className='img1'>
              <img 
                src={`http://localhost:8080/images/${item.product.imageUrl}`} 
                alt={item.product.name} 
                onError={(e) => { e.target.onerror = null; e.target.src = 'path/to/default/image.jpg'; }} 
              />
            </div>
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
        <span>Total price of selected items</span>
        <span className='total_price'>₹ {selectedTotalPrice}</span>
      </div>
      <button className="proceed" onClick={handleProceed}>
        Proceed
      </button>
      {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
    </article>
  );
};

export default Cart;
