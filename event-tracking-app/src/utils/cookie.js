// src/utils/cookie.js
import Cookies from 'js-cookie';

export const setCookie = (name, value, options = {}) => {
  // If expires is a number, convert it to a Date object
  if (typeof options.expires === 'number') {
    options.expires = new Date(Date.now() + options.expires * 864e5); // expires in days
  }

  Cookies.set(name, value, options);
};

export const getCookie = (name) => {
  return Cookies.get(name);
};

export const removeCookie = (name) => {
  Cookies.remove(name);
};
