// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Welcome = () => {
    const location = useLocation();
    const { authInfo } = location.state || {}; // Destructure authInfo from location.state

    return (
        <div className="container">
            <h2>Welcome Page</h2>
            <nav className="navbar">
                <Link to="/form">Form</Link>
                {authInfo === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
            </nav>
        </div>
    );
};

export default Welcome;
