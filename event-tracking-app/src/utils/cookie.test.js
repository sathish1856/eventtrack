import Cookies from 'js-cookie';
import { setCookie, getCookie, removeCookie } from './cookie';

jest.mock('js-cookie');

test('setCookie should set a cookie with the correct name, value, and options', () => {
    const mockSet = jest.fn();
    Cookies.set = mockSet;

    setCookie('testName', 'testValue', { expires: 7 });
    expect(mockSet).toHaveBeenCalledWith('testName', 'testValue', { expires: expect.any(Date) });
});

test('getCookie should return the cookie value', () => {
    Cookies.get.mockReturnValue('testValue');

    const result = getCookie('testName');
    expect(result).toBe('testValue');
});

test('removeCookie should remove the cookie with the correct name', () => {
    const mockRemove = jest.fn();
    Cookies.remove = mockRemove;

    removeCookie('testName');
    expect(mockRemove).toHaveBeenCalledWith('testName');
});
