import React, { useState, useEffect } from "react";
import OrderConfirmation from "./OrderConfirmation";
import { generatePdf } from "../api/endpoints"; // Adjust the import according to your file structure
import "../styles/checkout.css"; // Ensure you have the necessary CSS for styling

const Checkout = ({ selectedItems, cart, totalPrice, onBackCart }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState("credit");
  const [addressOpen, setAddressOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [itemsOpen, setItemsOpen] = useState(false);
  const [purchaseFinalized, setPurchaseFinalized] = useState(false);
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [isPdfView, setIsPdfView] = useState(false); // State for PDF view
  const [pdfUrl, setPdfUrl] = useState(""); // State for PDF URL
  const [showConfirmation, setShowConfirmation] = useState(false); // State for showing confirmation

  const paymentOptions = [
    { id: "credit", label: "Credit" },
    { id: "cod", label: "Cash on Delivery" },
    { id: "upi", label: "UPI" },
  ];

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        // Simulated user addresses, replace with actual fetch logic
        const userAddresses = [
          {
            id: 1,
            fullName: "John Doe",
            addressLine1: "123 Main St",
            addressLine2: "Apt 4B",
            city: "Springfield",
            state: "IL",
            zipCode: "62704",
            country: "USA",
          },
        ];
        setAddresses(userAddresses);
        setSelectedAddress(userAddresses[0]?.id);
      } catch (error) {
        console.error("Error fetching addresses:", error);
      }
    };

    fetchAddresses();
  }, []);

  const selectedCartItems = cart.filter((item) => selectedItems.has(item.id));

  const handleFinalizePurchase = async () => {
    if (!agreeChecked) return;

    try {
      // Generate PDF with selected items
      const blob = await generatePdf(selectedCartItems);
      const url = window.URL.createObjectURL(blob);
      setPdfUrl(url); // Save the PDF URL in state
      setIsPdfView(true); // Show the PDF view
    } catch (error) {
      console.error("Error finalizing purchase:", error);
    }
  };

  const toggleSection = (section) => {
    if (section === "address") setAddressOpen(!addressOpen);
    if (section === "payment") setPaymentOpen(!paymentOpen);
    if (section === "items") setItemsOpen(!itemsOpen);
  };

  const handleContinueShopping = () => {
    // Implement your logic for "Continue shopping" here
    window.location.href = '/continue-shopping';
  };

  if (showConfirmation) {
    // Render OrderConfirmation component
    return <OrderConfirmation onContinueShopping={handleContinueShopping} />;
  }

  if (isPdfView) {
    // Render PDF view
    return (
      <div className="pdf-view">
        <div className="pdf-buttons">
          <button id="printBtn" className="common_btn"  onClick={() => window.print()}>Print</button>
          <button id="downloadBtn" className="common_btn" onClick={() => {
            const a = document.createElement('a');
            a.href = pdfUrl;
            a.download = 'generated.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }}>Download</button>
          <button id="backToCheckoutBtn" className="common_btn" onClick={() => setIsPdfView(false)}>Back to Checkout</button>
          <button id="confirmBtn" className="common_btn" onClick={() => setShowConfirmation(true)}>Confirm</button>
        </div>
        <embed src={pdfUrl} type="application/pdf" width="100%" height="100%" style={{ height: "100vh" }} />
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-section">
        <h3 onClick={() => toggleSection("address")}>1. Address</h3>
        <div className={`address-info ${addressOpen ? "open" : ""}`}>
          {addresses.length === 0 ? (
            <p>Loading addresses...</p>
          ) : (
            addresses.map((address) => (
              <div key={address.id} className="test">
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
                    {address.fullName}, {address.addressLine1},{" "}
                    {address.addressLine2}, {address.city}, {address.state}{" "}
                    {address.zipCode}, {address.country}
                  </p>
                </label>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="checkout-section">
        <h3 onClick={() => toggleSection("payment")}>2. Payment Gateway</h3>
        <div className={`payment-info ${paymentOpen ? "open" : ""}`}>
          {paymentOptions.map((option) => (
            <div key={option.id} className="test">
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
        <h3 onClick={() => toggleSection("items")}>3. Items and Delivery</h3>
        <div className={`items-info ${itemsOpen ? "open" : ""}`}>
          {selectedCartItems.length === 0 ? (
            <p>No items selected for checkout.</p>
          ) : (
            <div>
              <ul>
                {selectedCartItems.map((item) => {
                  const imageUrl = item.product && item.product.images && item.product.images.length > 0 
                    ? `http://localhost:8080/images/${item.product.images[0].imageUrl}` 
                    : null;

                  return (
                    <li key={item.id}>
                      {imageUrl ? (
                        <img src={imageUrl} alt={item.product.name} />
                      ) : (
                        <div className="default-image">Image Missing</div>
                      )}
                      <span>{item.product.name}</span>
                      <span>Quantity: {item.quantity}</span>
                      <span>Price: ₹{item.product.price}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="checkout-total">
                <span>Total Price: ₹{totalPrice}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="agree-section">
        <label>
          <input
            type="checkbox"
            checked={agreeChecked}
            onChange={(e) => setAgreeChecked(e.target.checked)}
          />
          <span>Agree and Continue</span>
        </label>
      </div>
      <button className="back-button" onClick={onBackCart}>
        Back to Cart
      </button>
      <button
        className="finalize-button"
        onClick={handleFinalizePurchase}
        disabled={!agreeChecked}
      >
        Finalize Purchase
      </button>
    </div>
  );
};

export default Checkout;
