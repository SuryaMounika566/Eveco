import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, desc }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="product-item" to={`/product/${id}`}>
      <div className="image-container">
        <img className="product-image" src={image[0]} alt={name} />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-desc">{desc}</p>
      <p className="product-price">
        {currency}
        {price.toFixed(2)} {/* Ensures price is displayed with two decimal places */}
      </p>

      {/* Embedded CSS */}
      <style>{`
        .product-item {
          color: #374151; 
          cursor: pointer;
          text-decoration: none;

          /* Ensure no box appears */
          box-shadow: none;
          border: none;
          background-color: transparent;
        }

        .product-item:hover {
          box-shadow: none; 
          border: none; /* Prevent hover border */
          background-color: transparent; 
        }

        .image-container {
          overflow: hidden;
        }

        .product-image {
          transition: transform 0.3s ease-in-out;
        }

        .product-image:hover {
          transform: scale(1.1); 
        }

        .product-name {
          padding-top: 0.75rem; 
          padding-bottom: 0.25rem;
          font-size: 0.875rem; 
          font-weight: bold;
        }

        .product-desc {
          font-size: 0.75rem;
          color: #6b7280; /* Subtle text color */
          margin-bottom: 0.5rem;
        }

        .product-price {
          font-size: 0.875rem;
          font-weight: 500; 
        }
      `}</style>
    </Link>
  );
};

export default ProductItem;
