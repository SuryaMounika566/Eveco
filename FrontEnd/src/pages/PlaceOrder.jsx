import React, { useState } from "react";
import "../styles/PlaceOrder.css";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Submitted Successfully!");
    console.log("Payment Data:", formData);
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter your card number"
            required
            maxLength="16"
          />
        </div>

        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="Enter CVV"
            required
            maxLength="3"
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardHolder">Cardholder Name</label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            placeholder="Enter cardholder name"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;