import React from 'react';
import { FaSpotify, Fa500Px, FaSearch } from 'react-icons/fa';

function NavBar() {
  return (
    <div className="flex flex-col p-4 bg-gray-800 text-white w-24 md:w-48 lg:w-64">
      <div className="flex items-center gap-2 mb-4 p-2">
        <FaSpotify className="text-green-500" size={32} />
        <p className="hidden md:block font-bold text-xl">Spotify</p>
      </div>
      <div className="flex items-center gap-2 mb-4 p-2 bg-gray-500 text-yellow-50 cursor-pointer">
        <Fa500Px />
        <p className="hidden md:block font-bold">Home</p>
      </div>
      <div className="flex items-center gap-3 p-2 cursor-pointer text-white">
        <FaSearch />
        <p className="hidden md:block font-bold">Search</p>
      </div>
    </div>
  );
}

export default NavBar;
