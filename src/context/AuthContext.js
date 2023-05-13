import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      setCurrentUser(response.data.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // Make a request to the backend to verify the token
      axios
        .get('http://localhost:5000/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCurrentUser(response.data.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }

    setLoading(false);
  }, []);

  const value = { currentUser, login, logout,setCurrentUser };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };
