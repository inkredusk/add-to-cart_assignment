import React from 'react';
import "../styles/OrderConfirmation.css";

const OrderConfirmation = ({onContinueShopping}) => {
  return (
    <div className="order-confirmation">
      <p>Order successful....!</p>
      <p>Thank you for buying.</p>
      <button id="continueShoppingBtn" onClick={onContinueShopping} >Continue shopping</button>
    </div>
  );
};

export default OrderConfirmation;
