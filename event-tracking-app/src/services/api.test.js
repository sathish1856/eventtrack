import axios from 'axios';
import { login, fetchEvents, fetchFilteredEvents, storeEvent } from './api';

jest.mock('axios');

test('login should return response data', async () => {
    axios.post.mockResolvedValue({ data: { success: true } });
    const result = await login(1, 'password');
    expect(result).toEqual({ success: true });
});

test('login should throw error on failure', async () => {
    axios.post.mockRejectedValue(new Error('Login failed'));
    await expect(login(1, 'wrong-password')).rejects.toThrow('Login failed');
});

test('fetchEvents should return response data', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, name: 'Event 1' }] });
    const result = await fetchEvents();
    expect(result).toEqual([{ id: 1, name: 'Event 1' }]);
});

test('fetchFilteredEvents should return response data', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 2, name: 'Filtered Event' }] });
    const result = await fetchFilteredEvents('type1', '2024-01-01', '2024-01-31');
    expect(result).toEqual([{ id: 2, name: 'Filtered Event' }]);
});

test('storeEvent should return response data', async () => {
    axios.post.mockResolvedValue({ data: { id: 3, name: 'New Event' } });
    const result = await storeEvent({ name: 'New Event', date: '2024-08-08' });
    expect(result).toEqual({ id: 3, name: 'New Event' });
});

test('storeEvent should throw error on failure', async () => {
    axios.post.mockRejectedValue(new Error('Storing event failed'));
    await expect(storeEvent({ name: 'New Event', date: '2024-08-08' })).rejects.toThrow('Storing event failed');
});
