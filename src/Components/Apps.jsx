import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomeApp from './HomeApp';
import Genre from './Genre';
import NavBar from './NavBar';
import RegisterForm from './Register';
import RegisterPopUp from './RegisterPopUP';
import TopBar from './TopBar';
import Login from './Login';
import { toggleRegisterPopUp } from './store';
import Gospel from './Gospel';
import HipHop from './HipHop';
import Jazz from './Jazz';
import Classical from './Classical';
import Rock from './Rock';
import Pop from './Pop';

function Apps() {
  const { user, showRegisterPopup } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  const switchToLogin = () => {
    dispatch(toggleRegisterPopUp());
    setShowLogin(true);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    navigate('/genres');
  };

  const handleRegisterSuccess = () => {
    console.log('Navigating to /genres...');
    navigate('/genres'); // Ensure this path matches your route
  };

  return (
    <div className="relative h-screen bg-gray-900">
      <HomeApp /> {/* Background Display */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <NavBar />
        <TopBar />
        
        {!user ? (
          <div>
            {showRegisterPopup ? (
              <RegisterPopUp onSwitchToLogin={switchToLogin} />
            ) : showLogin ? (
              <Login onLoginSuccess={handleLoginSuccess} />
            ) : (
              <RegisterForm onRegisterSuccess={handleRegisterSuccess} />
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-full space-y-4 text-white z-10">
            <h1 className="text-lg">Select a genre to start exploring music!</h1>
          </div>
        )}
        
        {/* Routes */}
        <Routes>
       
          <Route path="/genres" element={<Genre />} />
          <Route path="/gospel" element={<Gospel />} />
          <Route path="/hip-hop" element={<HipHop />} />
          <Route path="/jazz" element={<Jazz />} />
          <Route path="/rock" element={<Rock />} />
          <Route path="/pop" element={<Pop />} />
          <Route path="/classical" element={<Classical />} />
        </Routes>
      </div>
    </div>
  );
}

export default Apps;

