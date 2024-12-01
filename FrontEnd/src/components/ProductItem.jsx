import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className='product-item' to={`/product/${id}`}>
      <div className='image-container'>
        <img className='product-image' src={image[0]} alt={name} />
      </div>
      <p className='product-name'>{name}</p>
      <p className='product-price'>{currency}{price}</p>

      {/* Embedded CSS */}
      <style>{`
        .product-item {
          color: #374151; /* Equivalent to text-gray-700 in Tailwind */
          cursor: pointer;
          text-decoration: none;
        }

        .image-container {
          overflow: hidden;
        }

        .product-image {
          transition: transform 0.3s ease-in-out;
        }

        .product-image:hover {
          transform: scale(1.1); /* Equivalent to hover:scale-110 */
        }

        .product-name {
          padding-top: 0.75rem; /* Equivalent to pt-3 in Tailwind */
          padding-bottom: 0.25rem; /* Equivalent to pb-1 in Tailwind */
          font-size: 0.875rem; /* Equivalent to text-sm in Tailwind */
        }

        .product-price {
          font-size: 0.875rem; /* Equivalent to text-sm in Tailwind */
          font-weight: 500; /* Equivalent to font-medium in Tailwind */
        }
      `}</style>
    </Link>
  );
};

export default ProductItem;
