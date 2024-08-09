// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import { trackPageViewEvent } from '../../utils/tracker';
import Loader from '../Loader/Loader'; //
import { useAuth } from '../../services/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setAuthInfo } = useAuth();

    useEffect(() => {
        trackPageViewEvent("Login Screen");
    }, []);
    
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const data = await login(username, password);
            localStorage.setItem('authToken', data.token);
            setAuthInfo(data.role);
            navigate('/form', { state: { authInfo: data.role } });
            setLoading(false);
        } catch (err) {
            setError('Invalid username or password');
            setLoading(false);
        }
    };

    return (
        <>
        <div className="login-container container">
        {loading ? <Loader/> : '' }
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        </>
    );
};

export default Login;
