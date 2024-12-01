import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

import logo from '../assets/logo.png'

const Footer = () => {
    return (
      <div>
        <div className="footer-divider"></div> {/* Divider line above footer */}
        <div className="footer-container">
          {/* Logo and Description */}
          <div>
            <img src={logo} className="footer-logo" alt="Logo" />
            <p className="footer-logo-text">
            At Eveco, sustainability is at the heart of everything we do. We believe that every small act of recycling contributes to a greener and cleaner planet. By repurposing materials and reducing waste, we’re helping to save resources, conserve energy, and fight pollution. Our mission is to make sustainable living accessible, offering eco-friendly products and promoting a circular economy. Together, we can create a positive impact on the environment and pave the way for a brighter, more sustainable future.
            </p>
          </div>
  
          {/* Company Links */}
          <div>
            <p className="footer-section-title">COMPANY</p>
            <ul className="footer-links">
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div>
            <p className="footer-section-title">GET IN TOUCH</p>
            <ul className="footer-contact">
              <li>+91 12345 67890</li>
              <li>
                <a href="mailto:eveco@gmail.com">eveco@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

export default Footer;
