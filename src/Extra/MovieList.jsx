import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MovieList() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/public/movies/5`, { responseType: 'arraybuffer' })
      .then(response => {
        const imageBlob = new Blob([response.data], { type: 'image/jpeg' }); // Change the type based on your image format
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageUrl(imageUrl);
      })
      .catch(error => console.error('Error fetching image:', error));
  },[]);
console.log(imageUrl);
  return (
    <div>
      {imageUrl ? <img src={imageUrl} alt="Movie" /> : <p>No image available</p>}
    </div>
  );
}

export default MovieList;
