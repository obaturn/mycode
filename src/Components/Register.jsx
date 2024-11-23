import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from './store';
import axios from 'axios';  // Corrected import statement

function Register({ onRegisterSuccess }) {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {  
    try {
      const response = await axios.post('http://127.0.0.1:5000/register', {  
        username: userName,  
        email: email,
        password: password,
      });
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      onRegisterSuccess();
      dispatch(setUser({ userName, password, email }));
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
      />
      <button
        onClick={handleRegister}
        className="w-full p-2 bg-green-500 rounded text-white"
      >
        Register
      </button>

      {/* Display error message */}
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

