import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes, redirect} from 'react-router-dom';
import axios from 'axios';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './admin/pages/Login';
import AdminDashboard from './admin/pages/Admindashboard'
import AddProject from './admin/pages/AddProject';
import EditProject from './admin/pages/EditProject';
import AdminContact from './admin/pages/ViewContact';
import { AuthProvider, useAuth } from './context/AuthContext';
import ViewProject from './admin/pages/ViewProject';
import NotFound from './pages/NotFound';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const isAuthenticated = !!currentUser;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // make a request to verify the token
      fetch('http://localhost:5000/api/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      })
      .then(response => response.json())
      .then(data => setCurrentUser(data.user))
      .catch(error => console.log('Failed to verify token:', error.message));
    }
  }, []);

    return (
      <AuthProvider value={{ currentUser, isAuthenticated, setCurrentUser }}>
        <Router>
      <Routes>
           
           {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />

          {/* Private routes */}
          <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}/>              
          <Route path='/admin/projects' element={<PrivateRoute><ViewProject/></PrivateRoute>}/>
          <Route path='/admin/projects/new' element={<PrivateRoute><AddProject/></PrivateRoute>}/>
          <Route path='/admin/projects/edit/:id' element={<PrivateRoute><EditProject/></PrivateRoute>}/>
          <Route path='admin/contacts' element={<PrivateRoute><AdminContact/></PrivateRoute>}/>

        {/* not found routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </AuthProvider>
    );
};

export default App;
