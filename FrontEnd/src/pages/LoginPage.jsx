import React, { useState } from 'react';
import styles from '../assets/Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Login() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className={styles['login-page']}>
            <div className={`${styles.container} ${isActive ? styles.active : ''}`} id="container">
                <div className={`${styles['form-container']} ${styles['sign-up']}`}>
                    <form>
                        <h1 className={styles['bold-text']}>Create Account</h1>
                        <div className={styles['social-icons']}>
                            <a href="http://localhost:5000/auth/google" className={styles.icon}>
                                <i className="fa-brands fa-google"></i>
                            </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" className={styles.input} />
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="password" placeholder="Password" className={styles.input} />
                        <button type="button" className={styles.button}>Sign Up</button>
                    </form>
                </div>

                <div className={`${styles['form-container']} ${styles['sign-in']}`}>
                    <form>
                        <h1 className={styles['bold-text']}>Sign In</h1>
                        <div className={styles['social-icons']}>
                            <a href="http://localhost:5000/auth/google" className={styles.icon}>
                                <i className="fa-brands fa-google"></i>
                            </a>
                        </div>
                        <span>or use your email password</span>
                        <input type="email" placeholder="Email" className={styles.input} />
                        <input type="password" placeholder="Password" className={styles.input} />
                        <a href="#" className={styles.link}>Forget Your Password?</a>
                        <button type="button" className={styles.button}>Sign In</button>
                    </form>
                </div>

                <div className={styles['toggle-container']}>
                    <div className={styles.toggle}>
                        <div className={`${styles['toggle-panel']} ${styles['toggle-left']}`}>
                            <h1 className={styles['bold-text']}>Welcome Back!</h1>
                            <p>
                                Reconnect and contribute to a sustainable future. Access your
                                account to continue supporting a circular economy.
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
                                Start your journey towards sustainability. Purchase eco-friendly
                                materials, and help us recycle and reuse for a greener planet.
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
