import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdsDisplay() {
  const [ads, setAds] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const token = 'YOUR_ACCESS_TOKEN'; // Replace with a valid token
        const response = await axios.get('https://api.spotify.com/v1/ads', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAds(response.data.ads);
      } catch (err) {
        console.error('Error fetching ads:', err);
        setError('Failed to load ads. Please try again later.');
      }
    };

    fetchAds();
  }, []);

  return (
    <div className="mt-8 space-y-4">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : ads.length > 0 ? (
        ads.map((ad, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-md text-white">
            <h3 className="text-xl font-bold">{ad.title}</h3>
            <p>{ad.description}</p>
          </div>
        ))
      ) : (
        <p>Loading ads...</p>
      )}
    </div>
  );
}

export default AdsDisplay;
