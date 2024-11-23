import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaEllipsisH, FaSearch, FaSpotify } from "react-icons/fa";
import pics from "./Asserts/s3.PNG";

const Gospel = () => {
  const [searchItem, setSearchItem] = useState("");
  const [songs, setSongs] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState(pics);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchSongs = async (newOffset = 0, append = false) => {
    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/gospel", {
        offset: newOffset,
        limit: 15,
      });
      const fetchedSongs = response.data;

      setSongs((prevSongs) =>
        append ? [...prevSongs, ...fetchedSongs] : fetchedSongs
      );

      if (fetchedSongs.length > 0) {
        const firstArtistImage = fetchedSongs[0].artist_image_url || pics;
        setBackgroundImage(firstArtistImage);
      }

      setOffset(newOffset);
      setError(null);
    } catch (err) {
      console.error("Error fetching gospel songs:", err);
      setError("Could not fetch gospel songs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => fetchSongs(0);

  const handleLoadMore = () => fetchSongs(offset + 15, true);

  const handleBack = () => navigate("/genres");

  return (
    <div
    className="bg-gray-300 text-white min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "contain", 
      backgroundRepeat: "no-repeat", 
      backgroundPosition: "center center",
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <FaSpotify className="text-green-500 text-3xl" />
          <FaSearch className="text-gray-700" />
          <input
            value={searchItem}
            placeholder="Search for your favorite songs"
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
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-blue-300">
              Your Gospel Library
            </h2>
            <div className="flex space-x-7">
              <button className="text-lg text-white">Recent</button>
              <FaEllipsisH className="text-white cursor-pointer text-2xl" />
            </div>
          </div>

          {error && <p className="text-red-500">{error}</p>}

          <div className="mt-6 space-y-4">
            {songs.length > 0 ? (
              songs.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gray-700 rounded-lg"
                >
                  {song.artist_image_url && (
                    <img
                      src={song.artist_image_url}
                      alt={song.artist}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{song.name}</h3>
                    <span>{song.artist}</span>
                  </div>
                  <a
                    href={song.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400"
                  >
                    Listen
                  </a>
                  <FaPlay className="text-green-500 cursor-pointer" />
                </div>
              ))
            ) : (
              <p className="text-white">
                No songs found. Try searching for music.
              </p>
            )}
          </div>

          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <button
              onClick={handleLoadMore}
              className="bg-black rounded p-2 text-white hover:bg-green-300 mt-4"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gospel;

