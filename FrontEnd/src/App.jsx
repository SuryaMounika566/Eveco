import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import Collection from './pages/Collection';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Orders from './pages/Orders';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Recycle from './pages/Recycle';
import ShopContextProvider from './context/ShopContext';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <div className="container">
      <ShopContextProvider>
        <Router>
          <SearchBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/recycle" element={<Recycle />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}
