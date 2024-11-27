import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

const HomePage = () => {
    const curr_theme = localStorage.getItem('curr_theme');
    const [theme, setTheme] = useState(curr_theme ? curr_theme : 'light');

    useEffect(() => {
        localStorage.setItem('curr_theme', theme);
    }, [theme]);

    console.log('Current Theme:', theme); 

    return (
        <div>
            <div className={`container ${theme}`}>
                <Header theme={theme} setTheme={setTheme} />
                <Carousel />
            </div>
        </div>
    );
};

export default HomePage;
