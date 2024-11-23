import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEllipsisH, FaSearch, FaSpotify } from 'react-icons/fa';
import pics from './Asserts/s3.PNG'; 

const Jazz = () => {
  const [searchItem, setSearchItem] = useState('');
  const [songs, setSongs] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(pics);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const typingTimeoutRef = useRef(null);

  const handleSearch = useCallback(async (query, page = 1) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/Jazz?page=${page}`);
      const fetchedSongs = response.data;

      setSongs((prevSongs) => (page === 1 ? fetchedSongs : [...prevSongs, ...fetchedSongs]));
      setError(null);

      // Update background image with the first song's artist image
      if (fetchedSongs.length > 0 && fetchedSongs[0].artist_image_url) {
        setBackgroundImage(fetchedSongs[0].artist_image_url);
      } else {
        setBackgroundImage(pics); // Default image
      }
    } catch (err) {
      console.error('Error fetching jazz songs:', err);
      setError('Could not fetch songs. Please try again.');
    }
  }, []);

  useEffect(() => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    if (searchItem) {
      typingTimeoutRef.current = setTimeout(() => {
        handleSearch(searchItem, 1);
      }, 500);
    } else {
      setSongs([]);
    }

    return () => clearTimeout(typingTimeoutRef.current);
  }, [searchItem, handleSearch]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    handleSearch(searchItem, nextPage);
  };

  const handleBack = () => {
    navigate('/genres'); 
  };

  return (
    <div
      className="bg-gray-300 text-white min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain', // Adjusted
        backgroundRepeat: "no-repeat", 
        backgroundPosition: 'center center', // Adjusted
      }}
    >
      <div className="flex items-center justify-between p-4 max-w-3xl mx-auto">
        <div className="flex items-center space-x-2">
          <FaSpotify className="text-green-500 text-3xl" />
          <FaSearch className="text-gray-700" />
          <input
            value={searchItem}
            placeholder="Search for your favourite songs"
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white w-full max-w-sm"
          />
          <button
            onClick={() => handleSearch(searchItem, 1)}
            className="bg-black rounded p-2 text-white hover:bg-green-300"
          >
            Search Music
          </button>
          <button
            onClick={handleBack}
            className="bg-black rounded p-2 text-white hover:bg-green-300"
          >
            Back To Genre
          </button>
        </div>
      </div>

      <div className="bg-gray-900 flex justify-center items-center py-10">
        <div className="p-6 bg-gray-800 rounded-lg max-w-lg mx-auto text-white shadow-xl flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold ">Your best Jazz library</h2>
            <div className="flex space-x-4">
              <button className="text-sm text-white">Recents</button>
              <FaEllipsisH className="text-white cursor-pointer text-xl" />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="mt-4 space-y-3">
            {songs.length > 0 ? (
              songs.map((song, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700 rounded-lg">
                  {song.artist_image_url && (
                    <img
                      src={song.artist_image_url}
                      alt={song.artist}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  )}
                  <h3 className="text-base font-semibold">{song.name}</h3>
                  <p className="text-sm text-gray-400">by {song.artist}</p>
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 text-sm"
                  >
                    Listen on Spotify
                  </a>
                </div>
              ))
            ) : (
              <div className="text-center">
                <p>Start by searching for Jazz music.</p>
              </div>
            )}
          </div>

          {songs.length > 0 && (
            <button
              onClick={handleLoadMore}
              className="bg-black text-white w-full py-2 rounded-lg hover:bg-green-300"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jazz;
