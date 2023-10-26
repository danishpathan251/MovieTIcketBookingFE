import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import MovieConnecttheater from './Movie/MovieConnecttheater';

const ImageDisplay = () => {
  const [imagePath, setImagePath] = useState('');

  useEffect(() => {
    // Fetch the image path from the backend API
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/public/movieDisplay/13`) // Replace '1' with the appropriate image ID you want to display
      .then((response) => {
        console.log(response.data);
        // Set the image path received from the backend
        setImagePath(response.data);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <>
     <MovieConnecttheater/>
    {/* <div>
          {imagePath}
         <img className="card-img-top" src="C:/mypc/react/moviebooking/src/images/978a7b5c-fb3a-4e7f-bfa8-cac666322bf8_shawshank.png"  height="200px" width="250px"/>


      {imagePath ? (
        <div>
          <Image src={`../images/${imagePath}`}  width="200px" height="200px" />
        </div>
      ) : (
        <div>Loading image...</div>
      )}
    </div> */}
   
</>
  );
};

export default ImageDisplay;
