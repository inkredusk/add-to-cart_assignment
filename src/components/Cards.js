import React from 'react';
import '../styles/cards.css';

const Cards = ({ item, handleClick }) => {
  const { name, price, stock, images } = item;
  const imageUrl = images[0]?.imageUrl; // Accessing the imageUrl from the first element of the images array

  // Console log to check item properties and imageUrl
  console.log("Item:", item);
  console.log("Image URL:", imageUrl);

  return (
    <div className='cards'>
      <div className='image_box'>
        {imageUrl ? (
          <img src={`http://localhost:8080/images/${imageUrl}`} alt={name} />
        ) : (
          <p>No image available</p>
        )}
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
