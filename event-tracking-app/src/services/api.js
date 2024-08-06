import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const login = async (id, password) => {
    try {
        const response = await axios.post(`${API_URL}/api/login`, {
            id: Number(id),
            password: password
        });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const fetchEvents = async () => {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;
};

export const fetchFilteredEvents = async (eventType, startDate, endDate) => {
    const response = await axios.get(`${API_URL}/events`, {
        params: {
            type: eventType,
            start: startDate,
            end: endDate
        }
    });
    return response.data;
};

export const storeEvent = async (eventData) => {
    try {
        const response = await axios.post(`${API_URL}/events`, eventData);
        return response.data;
    } catch (error) {
        console.error('Error storing event data:', error);
        throw error;
    }
};