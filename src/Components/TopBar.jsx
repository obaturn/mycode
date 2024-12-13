import React, { useState } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-gray-800 p-4 text-white shadow-lg">
      {/* Search Section */}
      <div className="flex items-center space-x-1 w-full sm:w-auto">
        <FaSearch className="text-xl" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for songs..."
          className="flex-grow p-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Notification and User Icons */}
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <FaBell className="text-xl cursor-pointer hover:text-gray-400 transition" />
        <FaUserCircle className="text-xl cursor-pointer hover:text-gray-400 transition" />
      </div>
    </div>
  );
};

export default TopBar;
