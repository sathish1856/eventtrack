import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../../services/api';
import { trackPageViewEvent } from '../../utils/tracker';

import Loader from '../Loader/Loader';

const AdminDashboard = () => {
    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [eventType, setEventType] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [eventTypes, setEventTypes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 10;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        trackPageViewEvent("AdminScreen");
        const getEvents = async () => {
            setLoading(true);
            setEvents([]);
            const data = await fetchEvents();
            setEvents(data);
            setFilteredEvents(data);

            const types = Array.from(new Set(data.map(event => event.event_values)));
            setEventTypes(types);
            setLoading(false);
        };
        getEvents();
    }, []);

    useEffect(() => {
        const filterEvents = () => {
            const filtered = events.filter(event => {
                const eventDate = new Date(event.timestamp);
                const start = startDate ? new Date(startDate) : null;
                const end = endDate ? new Date(endDate) : null;
                const isInDateRange = (!start || eventDate >= start) && (!end || eventDate <= end);
                const matchesType = !eventType || event.event_values.toLowerCase().includes(eventType.toLowerCase());

                return isInDateRange && matchesType;
            });

            setFilteredEvents(filtered);
            setCurrentPage(1);
        };

        filterEvents();
    }, [eventType, startDate, endDate, events]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastEvent = currentPage * eventsPerPage;
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
    const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredEvents.length / eventsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container">
            <h2>Admin Dashboard</h2>
            <div className="row mb-3">
                <div className="col-md-4">
                    <label>Event Type</label>
                    <select 
                        className="form-control" 
                        value={eventType} 
                        onChange={(e) => setEventType(e.target.value)}
                    >
                        <option value="">All Types</option>
                        {eventTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-3">
                    <label>Start Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={startDate} 
                        onChange={(e) => setStartDate(e.target.value)} 
                    />
                </div>
                <div className="col-md-3">
                    <label>End Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        value={endDate} 
                        onChange={(e) => setEndDate(e.target.value)} 
                    />
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Timestamp</th>
                        <th>IP Address</th>
                        <th>User Agent</th>
                        <th>Event Values</th>
                        <th>User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEvents.map((event) => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.timestamp}</td>
                            <td>{event.ipaddress}</td>
                            <td>{event.useragent}</td>
                            <td>{event.event_values}</td>
                            <td>{event.userid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {loading ? <Loader/> : '' }
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                            <button onClick={() => handlePageChange(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
