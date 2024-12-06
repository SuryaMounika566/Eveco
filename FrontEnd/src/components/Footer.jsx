import React from 'react';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
      <div>
        <div className="footer-divider"></div> 
        <div className="footer-container">
          <div>
            <img src={logo} className="footer-logo" alt="Logo" />
          </div>
          <div>
            <p className="footer-section-title">COMPANY</p>
            <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
        <li><Link to="/recycle">Recycle</Link></li>
        <li><Link to="/collection">Collections</Link></li>
        <li><Link to="/about">About</Link></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <p className="footer-section-title">GET IN TOUCH</p>
            <ul className="footer-contact">
              <li>
                <a href="mailto:project.eveco@gmail.com">project.eveco@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Footer;
