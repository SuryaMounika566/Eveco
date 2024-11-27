import React, { useEffect, useState } from 'react';
import Header from '../components/HomePage_Header';
import Carousel from '../components/HomePage_Carousel';

export default function HomePage() {
    const curr_theme = localStorage.getItem('curr_theme');
    const [theme, setTheme] = useState(curr_theme ? curr_theme : 'light');

    useEffect(() => {
        localStorage.setItem('curr_theme', theme);
    }, [theme]);

    return (
        <div className={`container ${theme}`}>
            <Header theme={theme} setTheme={setTheme} />
            <Carousel />
        </div>
    );
}
