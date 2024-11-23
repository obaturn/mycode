import React, { useState } from 'react';
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearchResults } from './store';

function TopBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    const results = []; 
    dispatch(setSearchResults(results));
  };

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <div className="flex items-center space-x-2">
        <FaSearch />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for songs..."
          className="p-2 rounded bg-gray-700 text-white"
        />
        <button onClick={handleSearch} className="bg-blue-500 p-2 rounded text-white">
          Search
        </button>
      </div>
      <FaBell className="text-xl cursor-pointer" />
      <FaUserCircle className="text-xl cursor-pointer" />
    </div>
  );
}

export default TopBar;

