import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('dark');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName('dark'); // Set themeName directly to 'dark'
    // Remove event listener for 'change' on darkMediaQuery

    return () => {
      // Clean up by removing event listener when component unmounts
      darkMediaQuery.removeEventListener('change');
    };
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'dark' : 'light';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
