// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Welcome from './components/Welcome';
import FormPage from './components/FormPage';
import AdminDashboard from './components/AdminDashboard';
import PrivateRoute from './PrivateRoute';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [authInfo, setAuthInfo] = useState({ role: null });

    return (
        <Router>
            <div className="App">
                <header className="header">
                    <h1>Event Tracking Application</h1>
                </header>
                <Routes>
                    <Route path="/login" element={<Login setAuthInfo={setAuthInfo} />} />
                    <Route path="/welcome" element={<PrivateRoute><Welcome authInfo={authInfo} /></PrivateRoute>} />
                    <Route path="/form" element={<PrivateRoute><FormPage /></PrivateRoute>} />
                    <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
