import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import styles from '../styles/Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert('Email must contain @');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    axios
      .post('http://localhost:3001/register', { name, email, password })
      .then((result) => {
        localStorage.setItem('userName', name);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      alert('Email must contain @');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }
    axios
      .post('http://localhost:3001/login', { email, password })
      .then((result) => {
        const { name } = result.data;
        localStorage.setItem('userName', name);
        navigate('/');
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          alert('Invalid email or password');
        } else {
          console.log(err);
        }
      });
  };

  const decodeJWT = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      console.error('Failed to decode JWT', e);
      return null;
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    const decoded = decodeJWT(token);
    if (decoded) {
      console.log('Google user:', decoded);
      localStorage.setItem('userName', decoded.name);
      navigate('/');
    } else {
      console.error('Invalid Google token');
    }
  };

  const handleGoogleError = () => {
    console.log('Google login failed');
  };

  return (
    <div className={styles['login-page']}>
      <div className={`${styles.container} ${isActive ? styles.active : ''}`} id="container">
        <div className={`${styles['form-container']} ${styles['sign-up']}`}>
          <form onSubmit={handleRegisterSubmit}>
            <h1 className={styles['bold-text']}>Create Account</h1>
            <div className={styles['social-icons']}>
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </form>
        </div>

        <div className={`${styles['form-container']} ${styles['sign-in']}`}>
          <form onSubmit={handleLoginSubmit}>
            <h1 className={styles['bold-text']}>Sign In</h1>
            <div className={styles['social-icons']}>
              <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} />
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="forgot-password" className={styles.link}>
              Forgot Password?
            </Link>
            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>
        </div>

        <div className={styles['toggle-container']}>
          <div className={styles.toggle}>
            <div className={`${styles['toggle-panel']} ${styles['toggle-left']}`}>
              <h1 className={styles['bold-text']}>Welcome Back!</h1>
              <p>
                Reconnect and contribute to a sustainable future. Access your account to continue
                supporting a circular economy.
              </p>
              <button
                className={styles.hidden}
                id="login"
                type="button"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </div>
            <div className={`${styles['toggle-panel']} ${styles['toggle-right']}`}>
              <h1 className={styles['bold-text']}>Join Our Mission!</h1>
              <p>
                Start your journey towards sustainability. Purchase eco-friendly materials, and help
                us recycle and reuse for a greener planet.
              </p>
              <button
                className={styles.hidden}
                id="register"
                type="button"
                onClick={handleRegisterClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
