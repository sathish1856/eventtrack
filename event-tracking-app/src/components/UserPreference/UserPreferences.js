import React, { useState } from 'react';
import { getCookie, setCookie } from '../../utils/cookie';

const UserPreferences = () => {

    const [preferences, setPreferences] = useState({
        theme: getCookie('theme') || 'light',
    });

    const handleChange = (e) => {
        console.log(e.target);
        const { name, checked } = e.target;
        const newTheme = checked ? 'dark' : 'light';
        setPreferences((prevPreferences) => {
          const updatedPreferences = {
            ...prevPreferences,
            ['theme']: newTheme,
          };
          setCookie('theme', newTheme, { expires: 7 });
          return updatedPreferences;
        });
      };

    return (
        <div className='container'>
            <h3>User Preferences</h3>
            <div class="theme-toggle">
                <span class="theme-toggle__text">Light</span>
                <label class="theme-toggle__switch">
                    <input type="checkbox" class="theme-toggle__input" checked={preferences.theme === 'dark'} onChange={handleChange} />
                    <span class="theme-toggle__slider"></span>
                </label>
                <span class="theme-toggle__text">Dark</span>
            </div>
        </div>
    );
};

export default UserPreferences;
