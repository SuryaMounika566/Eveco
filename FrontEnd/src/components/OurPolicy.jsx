import React from 'react';
import { assets } from '../assets/assets';
import '../styles/OurPolicyCss.css'; // Import the CSS file

const OurPolicy = () => {
  return (
    <div className="our-policy-container">
        <div className="our-policy-item">
            <img src={assets.delivery} alt="Easy Delivery" className="w-12 m-auto mb-5"/>
            <p className="policy-title">Easy Delivery</p>
            <p className="policy-description">We offer hassle-free delivery and collection</p>
        </div>
        <div className="our-policy-item">
            <img src={assets.period} alt="Flexible Use Period" className="w-12 m-auto mb-5"/>
            <p className="policy-title">Flexible Use Period</p>
            <p className="policy-description">We offer hassle-free delivery and collection</p>
        </div>
        <div className="our-policy-item">
            <img src={assets.box} alt="Effortless Collection" className="w-12 m-auto mb-5"/>
            <p className="policy-title">Effortless Collection</p>
            <p className="policy-description">We offer hassle-free delivery and collection</p>
        </div>
        <div className="our-policy-item">
            <img src={assets.recycle} alt="Sustainable Recycling" className="w-12 m-auto mb-5"/>
            <p className="policy-title">Sustainable Recycling</p>
            <p className="policy-description">We offer hassle-free delivery and collection</p>
        </div>
       
    </div>
  );
};

export default OurPolicy;
