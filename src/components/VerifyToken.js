import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VerifyToken = () => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('http://localhost:5000/api/auth/verify', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setVerified(response.data.verified);
      } catch (error) {
        console.log(error.message);
      }
    };

    verifyToken();
  }, []);

  return <div>{verified ? 'Token verified' : 'Token not verified'}</div>;
};

export default VerifyToken;
