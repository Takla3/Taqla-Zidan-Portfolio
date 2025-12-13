import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <div className="theme-switch-wrapper">
            <div className={`theme-switch ${darkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
                <FaSun className={`icon sun ${!darkMode ? 'active' : ''}`} />
                <FaMoon className={`icon moon ${darkMode ? 'active' : ''}`} />
                <div className="switch-circle"></div>
            </div>
        </div>
    );
}

export default ThemeSwitch;
