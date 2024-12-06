import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import '../styles/ForgotPassword.css';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/forgot-password', { email })
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/login');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form">
        <h4>Forgot Password</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
