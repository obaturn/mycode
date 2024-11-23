import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from './store';

function Login({ onLoginSuccess }) {
  const dispatch = useDispatch();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        username_or_email: usernameOrEmail,
        password,
      });

      if (response.status === 200) {
        dispatch(setUser(usernameOrEmail));
        onLoginSuccess(); 
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error); 
      } else {
        setErrorMessage('An unknown error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="p-3 bg-black text-white max-w-md mx-auto mt-5 rounded-md">
      <h2 className="font-bold text-2xl mb-4">Login Details</h2>
      {errorMessage && <p className="text-green-300 mb-4">{errorMessage}</p>}
      <input
        type="text"
        placeholder="Enter your username or email"
        value={usernameOrEmail}
        onChange={(e) => setUsernameOrEmail(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-white text-black"
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-white text-black"
      />
      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 text-white rounded p-2"
      >
        Login
      </button>
    </div>
  );
}

export default Login;

