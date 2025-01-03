import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform the logout logic here
    // For example, clearing user session data
    localStorage.removeItem('user'); // Example of removing user data from localStorage
    // You can also clear other session data like tokens, etc.

    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Logout;
