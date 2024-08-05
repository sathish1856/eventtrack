// src/components/FormPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application form submitted successfully');
        setName('');
        setAge('');
        setEmail('');
        navigate('/form');
    };

    return (
        <div className="container">
            <h2>Application Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label>Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
