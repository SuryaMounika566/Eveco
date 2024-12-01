import React, { useState } from "react";
import "../styles/Query.css";

const Query = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required!");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address!");
      return;
    }

    setError("");
    setSubmitted(true);

    // Simulate submission process
    setTimeout(() => {
      console.log("Email submitted:", email);
    }, 1000);
  };

  return (
    <div className="query-container">
      <h2 className="query-title">Have a Query?</h2>
      <p className="query-description">
        Leave your email, and we will contact you shortly!
      </p>
      {!submitted ? (
        <form className="query-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className={`query-input ${error ? "input-error" : ""}`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="query-error">{error}</p>}
          <button type="submit" className="query-button">
            Submit
          </button>
        </form>
      ) : (
        <div className="query-success">
          <h3>Thank you!</h3>
          <p>We've received your query and will get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Query;
