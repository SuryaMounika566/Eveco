import React, { useState } from 'react';
import './IntialPageStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Intial() {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1 className="bold-text">Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="UserName" name="username"/>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password"  name="password"/>
          <button type="button">Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1 className="bold-text">Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" name="email"/>
          <input type="password" placeholder="Password" name="password" />
          <a href="#">Forget Your Password?</a>
          <button type="button">Sign In</button>
        </form>
      </div>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="bold-text">Welcome Back!</h1>
            <p>Reconnect and contribute to a sustainable future. Access your account to continue supporting a circular economy.</p>
            <button
              className="hidden"
              id="login"
              type="button"
              onClick={handleLoginClick}
            >
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
          <h1 className="bold-text">Join Our Mission!</h1>
          <p>Start your journey towards sustainability. Purchase eco-friendly materials, and help us recycle and reuse for a greener planet.</p>
            <button
              className="hidden"
              id="register"
              type="button"
              onClick={handleRegisterClick}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
