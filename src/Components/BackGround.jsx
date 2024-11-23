import React from 'react';
import picture from './Asserts/save1.PNG';

function BackGround({ children }) {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${picture})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        maxWidth: '100%', 
        maxHeight: '100%', 
      }}
    >
  
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default BackGround;
