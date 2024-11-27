import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import searchw from '../assets/search-w.png';
import searchb from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_night from '../assets/day.png';

const Header = ({ theme, setTheme }) => {
    console.log('Header Component Rendered with theme:', theme);

    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`navbar ${theme}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/recycle">Recycle</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="search-box">
                <input type="text" placeholder="Search" />
                <img src={theme === 'light' ? searchb : searchb} alt="Search Icon" />
            </div>

            <div className="auth-links">
                <Link to="/initial" className="auth-link">Sign In/Sign Up</Link>
               
            </div>
            <img
                onClick={toggle_mode}
                src={theme === 'light' ? toggle_light : toggle_night}
                alt="Toggle Icon"
                className="toggle-icon"
            />
        </div>
    );
};


export default Header;
