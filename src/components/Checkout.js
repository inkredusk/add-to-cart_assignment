import React, { useState, useEffect } from 'react';
import '../styles/checkout.css'; // Ensure you have the necessary CSS for styling

const Checkout = ({ selectedItems, cart, totalPrice, onBack }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [addressOpen, setAddressOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [itemsOpen, setItemsOpen] = useState(false);
  const [purchaseFinalized, setPurchaseFinalized] = useState(false); // State to track purchase finalized

  const paymentOptions = [
    { id: 'credit', label: 'Credit' },
    { id: 'cod', label: 'Cash on Delivery' },
    { id: 'upi', label: 'UPI' }
  ];

  useEffect(() => {
    // Simulate fetching addresses from an API or login information
    const fetchAddresses = async () => {
      try {
        // Replace this with actual API call
        const userAddresses = [
          {
            id: 1,
            fullName: "John Doe",
            addressLine1: "123 Main St",
            addressLine2: "Apt 4B",
            city: "Springfield",
            state: "IL",
            zipCode: "62704",
            country: "USA"
          },
          {
            id: 2,
            fullName: "Jane Doe",
            addressLine1: "456 Elm St",
            addressLine2: "Suite 5A",
            city: "Metropolis",
            state: "NY",
            zipCode: "10001",
            country: "USA"
          }
        ];
        setAddresses(userAddresses);
        setSelectedAddress(userAddresses[0]?.id); // Select the first address by default
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  const selectedCartItems = cart.filter(item => selectedItems.has(item.id));

  const handleFinalizePurchase = async () => {
    try {
      // Simulate finalizing purchase with an API call
      console.log("Simulating finalize purchase API call...");
      // Instead of actual API call, set purchase finalized state
      setPurchaseFinalized(true);
    } catch (error) {
      console.error("Error finalizing purchase:", error);
    }
  };

  const toggleSection = (section) => {
    if (section === 'address') setAddressOpen(!addressOpen);
    if (section === 'payment') setPaymentOpen(!paymentOpen);
    if (section === 'items') setItemsOpen(!itemsOpen);
  };

  return (
    <div className="checkout-container">
      <h2 className='heading'>Checkout</h2>
      <div className="checkout-section">
        <h3 onClick={() => toggleSection('address')}>1. Address</h3>
        <div className={`address-info ${addressOpen ? 'open' : ''}`}>
          {addresses.length === 0 ? (
            <p>Loading addresses...</p>
          ) : (
            addresses.map(address => (
              <div className='test' key={address.id}>
                <input
                  type="radio"
                  id={`address-${address.id}`}
                  name="address"
                  value={address.id}
                  checked={selectedAddress === address.id}
                  onChange={() => setSelectedAddress(address.id)}
                />
                <label htmlFor={`address-${address.id}`}>
                  <p>
                    <span className='addName'>{address.fullName},</span> {address.addressLine1}, {address.addressLine2}, {address.city}, {address.state} {address.zipCode}, {address.country}
                  </p>
                </label>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="checkout-section">
        <h3 onClick={() => toggleSection('payment')}>2. Payment Gateway</h3>
        <div className={`payment-info ${paymentOpen ? 'open' : ''}`}>
          {paymentOptions.map(option => (
            <div key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="payment"
                value={option.id}
                checked={selectedPayment === option.id}
                onChange={() => setSelectedPayment(option.id)}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="checkout-section">
        <h3 onClick={() => toggleSection('items')}>3. Items and Delivery</h3>
        <div className={`items-info ${itemsOpen ? 'open' : ''}`}>
          {selectedCartItems.length === 0 ? (
            <p>No items selected for checkout.</p>
          ) : (
            <div>
              <ul>
                {selectedCartItems.map(item => (
                  <li key={item.id}>
                    <img src={`http://localhost:8080/images/${item.img}`} alt={item.title} />
                    <span>{item.product.name}</span>
                    <span>Quantity: {item.quantity}</span>
                    <span>Price: ₹{item.product.price}</span>
                  </li>
                ))}
              </ul>
              <div className="checkout-total">
                <span>Total Price: ₹{totalPrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <button className="back-button" onClick={onBack}>Back to Cart</button>
      <button className="finalize-button" onClick={handleFinalizePurchase}>Finalize Purchase</button>

      {purchaseFinalized && (
        <div className="purchase-dialog">
          <p>Order finalized successfully!</p>
          <button onClick={() => {
            setPurchaseFinalized(false);
            onBack(); // Call onBack to go back to the cart page
          }}>Back to Cart</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
