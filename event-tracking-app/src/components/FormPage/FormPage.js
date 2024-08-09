import React, { useEffect, useState } from 'react';
import { storeEvent } from '../../services/api';
import { fetchIpAddress, trackCustomEvent, trackPageViewEvent } from '../../utils/tracker';

const FormPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        trackPageViewEvent("Form Screen");
    }, []);

    const handleSubmit = async (e) => {
          trackCustomEvent('Form Page', 'Form Submission', name, email);
          const userAgent = navigator.userAgent;
          const ipAddress = await fetchIpAddress();
  
          const eventData = {
              timestamp: new Date().toISOString(), 
              ipaddress: ipAddress,
              useragent: userAgent ? userAgent : 'unknown',
              event_values: 'Form submission',
              userid: 1234 
          };
  
        storeEvent(eventData);
        alert('Application form submitted successfully');
        setName('');
        setAge('');
        setEmail('');
    };

    return (
        <div className="container login-container">
            <h2>Application Form</h2>
            <div className="login-form">
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
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default FormPage;
