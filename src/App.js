import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import list from './Data.js'; // Assuming your product list is in 'data.js'

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState('');
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.amount, 0);
    setTotalQuantity(total);
  }, [cart]);

  const handleClick = (item) => {
    const existingItem = cart.find(product => product.id === item.id);
    if (existingItem) {
      if (existingItem.amount >= item.quantity) {
        setWarning('Item is out of stock');
        setTimeout(() => setWarning(''), 2000);
        return;
      } else {
        setCart(cart.map(product =>
          product.id === item.id ? { ...product, amount: product.amount + 1 } : product
        ));
      }
    } else {
      setCart([...cart, { ...item, amount: 1 }]); // Set initial amount to 1
    }
  }

  const handleChange = (item, delta) => {
    const index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      const newCart = [...cart];
      if (newCart[index].amount + delta > list.find(product => product.id === item.id).quantity) {
        setWarning('Unavailable stock');
        setTimeout(() => setWarning(''), 2000);
        return;
      } else if (newCart[index].amount + delta <= 0) {
        newCart.splice(index, 1); // Remove the item if amount is 0 or less
      } else {
        newCart[index].amount += delta;
      }
      setCart(newCart);
    }
  }

  return (
    <React.Fragment>
      <Navbar size={totalQuantity} setShow={setShow} />
      {show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
      {warning && <div className='warning'>{warning}</div>}
    </React.Fragment>
  );
}

export default App;
