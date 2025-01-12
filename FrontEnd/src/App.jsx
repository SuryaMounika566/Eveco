import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import Collection from './pages/Collection';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Recycle from './pages/Recycle';
import ShopContextProvider from './context/ShopContext';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Header from './components/Header';

import './App.css';

export default function App() {
  const CLIENT_ID = '322280829950-b4vff9cpimna8k4079lre46t447muurn.apps.googleusercontent.com'; 

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="container">
        <ShopContextProvider>
          <Router>
          
            <SearchBar />
            <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/recycle" element={<Recycle />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="login/forgot-password" element={<ForgotPassword />}/>
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
            </Routes>
            <Footer />
          </Router>
        </ShopContextProvider>
      </div>
    </GoogleOAuthProvider>
  );
}
