import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intial from './LoginAndRegistration/Intial';


const App = () => {
    const [count, setCount] = useState(0)
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/initial" element={<Intial />} /> 
            </Routes>
        </Router>
    );
};

export default App;

