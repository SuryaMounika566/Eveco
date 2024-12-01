import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = '₹';
  const delivery_fee = 10;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart)); 
    }
  }, []);

  useEffect(() => {
    if (Object.keys(cartItems).length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1; 
    } else {
      cartData[itemId] = 1; 
    }

    setCartItems(cartData); 
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const updateQuantity = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity; 
    setCartItems(cartData); 
  };

  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch, 
    cartItems, addToCart, getCartCount, updateQuantity
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
