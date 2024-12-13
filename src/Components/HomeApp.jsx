import React from 'react';
import Background from './BackGround'

function HomeApp() {
  return (
    <Background>
      <div className="flex h-full bg-cover bg-center justify-center items-center flex-col text-center text-white space-y-6 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Main heading with responsive font size */}
        <h1 className="text-1xl sm:text-3xl md:text-6xl lg:text-7xl font-bold ">
          Obaturn Spotify Music
        </h1>
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-xl">
          Discover the world of music. Play, stream, and share your favorite songs anytime, anywhere.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition">
          Start Listening
        </button>
      </div>
    </Background>
  );
}

export default HomeApp;

