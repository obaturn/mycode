import React from 'react';
import Background from './BackGround';

function HomeApp() {
  return (
    <Background>
      <div className="flex h-full justify-center items-center flex-col text-center text-white space-y-6">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 max-w-3xl">
          Obaturn Spotify Music
        </h1>
        <h2 className="text-lg font-medium max-w-2xl px-4 text-white">
          Discover and enjoy the best music recommendations tailored just for you. Explore genres,
          create playlists, and dive into the world of music.
        </h2>
      </div>
    </Background>
  );
}

export default HomeApp;
