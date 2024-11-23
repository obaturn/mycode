import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaEllipsisH, FaSearch, FaSpotify } from 'react-icons/fa';
import pics from './Asserts/s3.PNG';

const HipHop = () => {
  const [searchItem, setSearchItem] = useState('');
  const [songs, setSongs] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(pics);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const navigate = useNavigate();
  const [alert, setAlert] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);

  const fetchSongs = async (newOffset = 0, append = false) => {
    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:5000/HipHop', {
        offset: newOffset,
        limit: 15,
      });
      const fetchedSongs = response.data;

      if (append) {
        setSongs((prevSongs) => [...prevSongs, ...fetchedSongs]);
      } else {
        setSongs(fetchedSongs);
      }

      if (fetchedSongs.length > 0 && fetchedSongs[0].artist_image_url) {
        setBackgroundImage(fetchedSongs[0].artist_image_url);
      }

      setOffset(newOffset);
      setError(null);

      
      setAlert('Hello dear customer! You are listening to a preview here. Click "Listen on Spotify" to listen to the full track!');
      setAlertVisible(true);

      setTimeout(() => {
        setAlertVisible(false); 
      }, 30000); 
    } catch (err) {
      console.error('Error fetching hiphop songs:', err);
      setError('Could not fetch hiphop songs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handlePlayTrack = (trackUrl) => {
    if (trackUrl) {
      console.log('Playing track:', trackUrl);
      setCurrentTrack(trackUrl);
    } else {
      setError('No preview available for this track');
    }
  };

  const handleSearch = () => fetchSongs(0);

  const handleLoadMore = () => fetchSongs(offset + 15, true);

  const handleBack = () => navigate('/genres');

  return (
    <div
      className="bg-gray-300 text-white min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <FaSpotify className="text-green-500 text-3xl" />
          <FaSearch className="text-gray-700" />
          <input
            value={searchItem}
            placeholder="Search for your favourite songs"
            type="text"
            onChange={(e) => setSearchItem(e.target.value)}
            className="p-2 rounded bg-gray-700 text-white"
          />
          <button
            onClick={handleSearch}
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
        <div className="p-8 bg-gray-800 rounded-lg max-w-6xl mx-auto text-white shadow-xl flex flex-col space-y-8">
          <h2 className="text-2xl font-bold text-blue-300">
            Your Best HipHop Music Library
          </h2>

          {error && <p className="text-green-200">{error}</p>}

          {/* Display alert message */}
          {alertVisible && (
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
              {alert}
            </div>
          )}

          <div className="mt-6 space-y-4">
            {songs.length > 0 ? (
              songs.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <h3 className="text-xl font-semibold">{song.name}</h3>
                    <span>{song.artist}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handlePlayTrack(song.url)}
                      className="bg-green-500 p-2 rounded text-white hover:bg-green-400"
                    >
                      <FaPlay />
                    </button>
                    <FaEllipsisH
                      className="text-white cursor-pointer text-xl hover:text-gray-300"
                      onClick={() => console.log(`Options for ${song.name}`)}
                    />
                  </div>
                  {/* Listen on Spotify button */}
                  <a
                    href={`https://open.spotify.com/track/${song.id}`} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 p-2 rounded text-white hover:bg-green-400"
                  >
                    Listen on Spotify
                  </a>
                </div>
              ))
            ) : (
              <p className="text-white">No songs found</p>
            )}
          </div>

          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <button
              onClick={handleLoadMore}
              className="bg-black rounded p-2 text-white hover:bg-green-300 mt-4"
              disabled={loading}
            >
              Load More
            </button>
          )}

          {currentTrack && (
            <audio
              controls
              autoPlay
              src={currentTrack}
              className="w-full mt-4"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HipHop;
