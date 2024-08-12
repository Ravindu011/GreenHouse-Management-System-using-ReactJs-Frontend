// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

// Create a context for user data
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  // Load username from localStorage on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Save username to localStorage whenever it changes
  useEffect(() => {
    if (username) {
      localStorage.setItem('username', username);
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
