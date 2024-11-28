import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';
import searchw from '../assets/search-w.png';
import searchb from '../assets/search-b.png';
import toggle_light from '../assets/night.png';
import toggle_night from '../assets/day.png';
import defaultProfile from '../assets/default-profile.png'; 

const Header = ({ theme, setTheme }) => {
    const [user, setUser] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false); // For dropdown menu

    useEffect(() => {
        // Fetch user data from the backend
        fetch('http://localhost:5000/api/user', {
            credentials: 'include', // Include cookies for authentication
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Not authenticated');
            })
            .then((data) => setUser(data)) // Save user data
            .catch((err) => console.error(err));
    }, []);

    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleLogout = () => {
        fetch('http://localhost:5000/logout', {
            method: 'GET',
            credentials: 'include',
        })
            .then(() => {
                setUser(null); // Clear user state
                window.location.href = '/'; // Redirect to home page
            })
            .catch((err) => console.error(err));
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
                <img src={theme === 'light' ? searchw : searchb} alt="Search Icon" />
            </div>
            <div className="auth-links">
                {user ? (
                    <div className="profile-container">
                        <img
                            src={defaultProfile} // Always use the default picture
                            alt="Profile"
                            className="profile-picture"
                            onClick={() => setMenuOpen(!menuOpen)}
                        />
                        {menuOpen && (
                            <div className="dropdown-menu">
                                <Link to="/cart">Cart</Link>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login" className="auth-link">Sign In/Sign Up</Link>
                )}
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
