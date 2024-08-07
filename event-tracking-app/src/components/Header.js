// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import your custom styles for the header
import { useAuth } from './AuthContext';

const Header = () => {
        const { setAuthInfo } = useAuth();
    const navigate = useNavigate();
    const authInfo = useAuth();
    console.log(authInfo.authInfo);
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setAuthInfo(null);
        navigate('/login');
    };
    
    return (
        <header className="header"> 
            <nav className="navbar">
                <Link to="/form" className="nav-link">Form</Link>
                {authInfo.authInfo === 'admin' && <Link to="/admin" className="nav-link">Admin Dashboard</Link> }
                {authInfo.authInfo === 'admin' && <a href="http://localhost:9090/micro/ui"  className="nav-link" target="_blank" rel="noopener noreferrer">Snowplow Dashboard</a> }
                <Link to="/preferences" className="nav-link">User Preferences</Link>
                <button className="nav-link" onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
};

export default Header;
