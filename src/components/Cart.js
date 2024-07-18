
import React, { useState, useEffect } from 'react';
import '../styles/cart.css';
import Modal from './Modal';
import Checkout from './Checkout'; // Import the Checkout component
import { getTotalPrice, getAllCartItems, deleteItemById } from '../api/endpoints'; // Import deleteItemById API call
import App from '../App';


const Cart = ({ cart, setCart, handleChange, handleRemove, showModal, setShowModal, modalMessage, setModalMessage }) => {
  const [selectedItems, setSelectedItems] = useState(new Set(cart.map(item => item.id)));
  const [selectedTotalPrice, setSelectedTotalPrice] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false); // Add state to manage showing the Checkout component
  const [showAmazon, setShowAmazon] = useState(false); // Add state to manage showing the Amazon component
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchSelectedTotalPrice();
  }, [selectedItems, cart]);

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
      const total = await getTotalPrice();
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
      setShowCheckout(true); // Show the Checkout component
    } else {
      setModalMessage('Please select at least one product.');
      setShowModal(true);
    }
  };

  const goBackToHome = () => {
    setShowAmazon(true); // Show the Amazon component
  };

  if (showAmazon) {
    return <App />;
  }

  const goBackToCart = () => {
    setShowCheckout(false); // Show the Amazon component
  };

  
  // const handleRemove = async (itemId) => {
  //   try {
  //     await deleteItemById(itemId); // Call your API to delete item by ID
  //     const updatedCart = cart.filter(item => item.id !== itemId);
  //     setCart(updatedCart); // Update cart state
  //   } catch (error) {
  //     console.error('Error removing item:', error);
  //     // Handle error
  //   }
  // };

  if (showCheckout) {
    return (
      <Checkout 
        selectedItems={selectedItems} 
        cart={cart} 
        totalPrice={selectedTotalPrice} 
        //onBack={() => setShowCheckout(false)} 
        onBack={goBackToHome} 
        onBackCart={goBackToCart}
      />
    );
  }

  return (
    <article>
      <button className="toggle-select" onClick={toggleSelectAll}>
      {cart.length === 0 || selectedItems.size === cart.length ? 'Deselect All' : 'Select All'}
      </button>
      {cart?.map(item => {
        let imageUrl = null;
        if (item.product && item.product.images && item.product.images.length > 0) {
          imageUrl = item.product.images[0].imageUrl;
        }

        return(
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <input 
              type="checkbox"
              checked={selectedItems.has(item.id)}
              onChange={() => toggleSelectItem(item.id)}
            />
            <div className='img1'>
                {/* Ensure item.product.imageUrl exists before rendering */}
                {imageUrl ? (
                  <img 
                    src={`http://localhost:8080/images/${imageUrl}`}
                    alt={item.product.name} 
                  />
                ) : (
                  <div className="default-image">Image Missing</div>
                )}
              </div>
            <div className='cart_desc'>
              <div className='cart_title'><p>{item.product.name}</p></div>
              <div className='cart_quantity'>
                <button className="q_btn" onClick={() => handleChange(item, +1)}> + </button>
                <button className="q_btn">{item.quantity}</button>
                <button className="q_btn" onClick={() => handleChange(item, -1)}> - </button>
                <button className="delete" onClick={() => handleRemove(item.id)}><i className='fa fa-trash' style={{ color: 'black' }}></i></button>
                <span>₹{item.product.price}</span>
              </div>
            </div>
          </div>
          <div className='container_seperate'></div>
        </div>
        );
})}
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
