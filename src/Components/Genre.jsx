import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setGenre } from './store';

const genres = [
  { name: 'Gospel', route: '/gospel' },
  { name: 'HipHop', route: '/hip-hop' },
  { name: 'Jazz', route: '/jazz' },
  { name: 'Rock', route: '/rock' },
  { name: 'Pop', route: '/pop' },
  { name: 'Classical', route: '/classical' },
];

const Genre = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGenreClick = (genre) => {
    dispatch(setGenre(genre.name)); 
    navigate(genre.route); 
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg max-w-2xl mx-auto mt-20 text-white flex flex-col items-center space-y-8">
      <h2 className="text-3xl font-bold mb-4 text-red-300">Select your Genre</h2>
      <div className="grid grid-cols-2 gap-6 w-full md:grid-cols-3">
        {genres.map((genre) => (
          <button
            key={genre.name}
            onClick={() => handleGenreClick(genre)}
            className="p-4 bg-gray-700 hover:bg-gray-500 rounded-lg text-white text-lg"
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Genre;
