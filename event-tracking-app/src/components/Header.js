// src/components/Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import your custom styles for the header
import { useAuth } from './AuthContext';

const Header = () => {
        const { setAuthInfo } = useAuth();
    const navigate = useNavigate();
    const authInfo = useAuth();
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setAuthInfo(null);
        navigate('/login');
    };
    return (
        <header className="header"> 
            <nav className="navbar">
                <Link to="/form" className="nav-link">Form</Link>
                <Link to="/admin" className="nav-link">Admin Dashboard</Link>
                <a href="http://localhost:9090/micro/ui"  className="nav-link" target="_blank" rel="noopener noreferrer">Snowplow Dashboard</a>
                <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
            </nav>
        </header>
    );
};

export default Header;
