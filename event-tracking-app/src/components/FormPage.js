import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackCustomEvent } from '../utils/tracker';
import { trackPageViewEvent } from '../utils/tracker';
import { storeEvent } from '../services/api';
import { fetchIpAddress } from '../utils/tracker';

const FormPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        trackPageViewEvent("Form Screen");
    }, []);

    const handleSubmit = async (e) => {
        console.log(name + email);
          trackCustomEvent('Form Page', 'Form Submission', name, email);
          const userAgent = 'Chrome';
          const ipAddress = await fetchIpAddress();
  
          const eventData = {
              timestamp: new Date().toISOString(), 
              ipaddress: ipAddress,
              useragent: userAgent,
              event_values: 'Form submission',
              userid: 1234 
          };
  
        storeEvent(eventData);
        alert('Application form submitted successfully');
        setName('');
        setAge('');
        setEmail('');
        navigate('/form'); 
    };

    return (
        <div className="container login-container">
            <h2>Application Form</h2>
            <form onSubmit={handleSubmit} className="login-form">
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
                <button type="submit"  className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
