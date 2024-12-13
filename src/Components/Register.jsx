import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { setUser } from './store';
import axios from 'axios';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', formData);

      console.log('API Response:', response.data);

      
      setSuccessMessage(response.data.message || 'Registration successful!');
      setErrorMessage('');

      
      dispatch(setUser(formData));

      
      navigate('/genres');
    } catch (error) {
      console.error('Registration error:', error);

      
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Registration failed');
      } else if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }

    
      setSuccessMessage('');
    }
  };

  return (
    <div className="p-3 bg-gray-600 rounded-lg max-w-md mx-auto mt-20 text-white">
      <h2 className="text-2xl font-bold mb-6">Registration Form</h2>
      
    
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      
    
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      
      
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      
    
      <button
        onClick={handleRegister}
        className="w-full p-2 bg-green-500 rounded text-white"
      >
        Register
      </button>

      
      {errorMessage && (
        <div className="mt-4 text-red-200 rounded">
          <p>{errorMessage}</p>
        </div>
      )}
    
      
      {successMessage && (
        <div className="mt-4 text-green-300 rounded">
          <p>{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Register;
