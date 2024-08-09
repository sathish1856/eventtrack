// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AdminDashboard from './components/Admin/AdminDashboard';
import { AuthProvider } from './services/AuthContext';
import FormPage from './components/FormPage/FormPage';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import UserPreferences from './components/UserPreference/UserPreferences';
import Welcome from './components/Welcome/Welcome';
import PrivateRoute from './PrivateRoute';
import { getCookie } from './utils/cookie';

const App = () => {
    const [authInfo, setAuthInfo] = useState({ role: null });

    const ConditionalHeader = () => {
        const location = useLocation();
        if (location.pathname === '/login') {
            return null;
        }
        return <Header />;
    };

    const userPreferences = {
        theme: getCookie('theme'),
    }
    ;
    return (
        <Router>
            <AuthProvider>
            <div >
                <div className={`app ${userPreferences.theme}`}>
                    <div className='myHeader'>Event Tracking Application</div>
                </div>
                <ConditionalHeader/>
                <Routes>
                    <Route path="/login" element={<Login setAuthInfo={setAuthInfo} />} />
                    <Route path="/welcome" element={<PrivateRoute><Welcome authInfo={authInfo} /></PrivateRoute>} />
                    <Route path="/form" element={<PrivateRoute><FormPage /></PrivateRoute>} />
                    <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                    <Route path="/preferences" element={<PrivateRoute><UserPreferences /></PrivateRoute>} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
            </AuthProvider>
        </Router>
    );
};

export default App;
