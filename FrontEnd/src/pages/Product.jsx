import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import '../styles/product.css';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = () => {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      }
    };
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      

      {/* Product Details */}
      <div className="product-details">
        <div className="product-images">
          <div className="thumbnail-container">
            {productData.image.map((img, index) => (
              <img
                src={img}
                key={index}
                alt={`Thumbnail ${index}`}
                className={`thumbnail ${image === img ? 'active' : ''}`}
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={image} alt={productData.name} />
          </div>
        </div>
  
        <div className="product-info">
          <h1 className="product-name">{productData.name}</h1>
          <p className="product-price">
            {currency} {productData.price.toFixed(2)}
          </p>
          <p className="product-description">{productData.desc}</p>

          {/* Add to Cart Section */}
          <div className="additional-info">
            <p className="info-item">100% Original Product</p>
            <p className="info-item">Easy Delivery & Return</p>
          </div>

          {/* Add to Cart Button */}
          <button onClick={()=>addToCart(productData._id)} className="add-to-cart-button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
