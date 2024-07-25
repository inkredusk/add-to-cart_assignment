import React, { useState, useEffect } from 'react';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import './App.css';
import { addToCart, getAllCartItems, getTotalPrice, getTotalQuantity, updateCartQuantity, removeFromCart } from './api/endpoints';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartItems = await getAllCartItems();
        setCart(cartItems);
        setTotalQuantity(await getTotalQuantity());
        setTotalPrice(await getTotalPrice());
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartData();
  }, []);

  const handleClick = async (item) => {
    try {
      await addToCart(item.id);
      const cartItems = await getAllCartItems();
      setCart(cartItems);
      setTotalQuantity(await getTotalQuantity());
      setTotalPrice(await getTotalPrice());
    } catch (error) {
      console.error('Error adding item to cart:', error);
      setModalMessage('Error adding item to cart');
      setShowModal(true);
    }
  };

  const handleChange = async (item, delta) => {
  //  const updatedQuantity = item.quantity + delta;
    //if (updatedQuantity < 1) return;

    try {
      await updateCartQuantity(item.id, delta);
      const cartItems = await getAllCartItems();
      setCart(cartItems);
      setTotalQuantity(await getTotalQuantity());
      setTotalPrice(await getTotalPrice());
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      const cartItems = await getAllCartItems();
      setCart(cartItems);
      setTotalQuantity(await getTotalQuantity());
      setTotalPrice(await getTotalPrice());
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  return (
    <React.Fragment>
      <Navbar size={totalQuantity} setShow={setShow} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
          handleRemove={handleRemove}
          totalPrice={totalPrice}
          showModal={showModal}
          setShowModal={setShowModal}
          modalMessage={modalMessage}
          setModalMessage={setModalMessage}
        />
      )}
    </React.Fragment>
  );
}

export default App;




