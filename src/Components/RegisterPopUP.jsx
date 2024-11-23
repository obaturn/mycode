import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleRegisterPopUp } from './store';

function RegisterPopUp({ onSwitchToLogin }) {
  const dispatch = useDispatch();

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-500">
          Welcome to OBATURN Spotify Music Listening!
        </h2>
        <p className="mb-4">
          Sign Up To Get Started With Personalized Music Recommendations And Stay Blessed.
        </p>
        <p>
          And Stay Tune To Listen To The Best Music On Heart
        </p>
        <button
          onClick={() => dispatch(toggleRegisterPopUp())}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign Up Now
        </button>
        <p className="mt-4">
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

