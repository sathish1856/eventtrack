// src/components/Welcome.js
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trackPageViewEvent } from '../utils/tracker';
import './Welcome.css'; // Import the CSS file for styling
import { useAuth } from './AuthContext';

const Welcome = () => {
    const location = useLocation();
    //const { authInfo } = location.state || {}; // Destructure authInfo from location.state
    const { authInfo } = useAuth();
    useEffect(() => {
        trackPageViewEvent("welcomeScreen");
    }, []);

    return (
        <div className="container">
            <div className="button-group">
                <Link to="/form" className="btn">Form</Link>
                {authInfo === 'admin' && <Link to="/admin" className="btn">Admin Dashboard</Link>}
               
            </div>
        </div>
    );
};

export default Welcome;
