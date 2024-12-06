import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { Navigate, useNavigate } from 'react-router-dom';  
import '../styles/Cart.css'; 

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = products.find((product) => product._id === itemId);
        if (product) {
          tempData.push({
            _id: itemId,
            name: product.name,
            image: product.image[0],  
            price: product.price,
            quantity: cartItems[itemId],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className="cart-container">
      <div className="cart-title">
        <Title text1="Your" text2="Cart" />
      </div>

      {cartData.length > 0 ? (
        cartData.map((item, index) => {
          return (
            <div key={index} className="cart-item">
              <div className="cart-item-info">
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <p className="cart-item-name">{item.name}</p>
                <div className="cart-item-price">
                  <p>{currency}{item.price}</p>
                </div>
              </div>
              <div className="cart-item-quantity">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item._id, e.target.value)}
                />
              </div>
              <div className="cart-item-remove">
                <img
                  onClick={() => updateQuantity(item._id, 0)}  
                  className="remove-icon"
                  src={assets.bin}
                  alt="Remove Item"
                />
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-cart">Your cart is empty!</div>
      )}

      <div className="back-to-home-container">
        <button className ="back-to-home-button" onClick={()=> navigate('/placeorder')}>Payment </button>
      </div>
    </div>
  );
};

export default Cart;
