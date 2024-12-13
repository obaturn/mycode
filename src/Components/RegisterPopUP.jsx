import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRegisterPopUp } from './store';

function RegisterPopUp({ onSwitchToLogin }) {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-3 sm:p-4 rounded-lg text-center max-w-xs sm:max-w-sm w-full mx-3 shadow-md">
        <h2 className="text-base sm:text-lg font-bold mb-2 text-gray-600">
          Welcome to OBATURN Spotify!
        </h2>
        <p className="mb-2 text-xs sm:text-sm text-gray-700">
          Sign up to enjoy personalized music recommendations.
        </p>
        <p className="mb-3 text-xs sm:text-sm text-gray-700">
          Stay tuned for the best music on earth.
        </p>
        <button
          onClick={() => dispatch(toggleRegisterPopUp())}
          className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 transition text-xs sm:text-sm"
        >
          Sign Up Now
        </button>
        <p className="mt-3 text-xs text-gray-600">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="text-blue-500 underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default RegisterPopUp;
