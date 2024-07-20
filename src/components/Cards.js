import React from 'react';
import '../styles/cards.css';

const Cards = ({ item, handleClick }) => {
  const { name, price, img, stock } = item;

  return (
    <div className='cards'>
      <div className='image_box'>
        <img src={img} alt='Image' />
      </div>
      <div className='details'>
        <p>{name}</p>
        <p>M.R.P.: ₹{price}</p>
        <p>Stock Quantity: {stock}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;