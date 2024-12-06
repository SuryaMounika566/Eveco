import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import searchw from '../assets/search-w.png';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const Header = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('userName'); 

  const handleSignOut = () => {
    localStorage.removeItem('userName'); 
    navigate('/'); 
  };

  const { getCartCount } = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link to="/" >
      <img src={logo} alt="Logo" className="logo" />
    </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recycle">Recycle</Link></li>
        <li><Link to="/collection">Collections</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={searchw} alt="Search Icon" />
      </div>
      <div className="auth-links">
        {userName ? (
          <div className="user-controls">
            <span className="auth-link">Welcome, {userName}</span>
            <button className="sign-out-button" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="auth-link">Sign In/Sign Up</Link>
        )}
      </div>
      <Link to="/cart" className="cart-icon-link">
        <img src={assets.cart_icon} alt="Cart Icon" className="cart-icon" />
        <p>{getCartCount()}</p>
      </Link>
    </div>
  );
};

export default Header;
