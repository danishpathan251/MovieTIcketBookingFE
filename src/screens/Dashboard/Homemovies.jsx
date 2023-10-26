import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RotateLoader from "react-spinners/RotateLoader";


function Homemovies() {
  const[loading,setLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

  const [showCard, setShowCard] = useState(false);
  useEffect(() => {
    setLoading(true);

    setShowCard(true);

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/public/getMovie`)
      .then((response) => {
        const filteredData = response.data.filter((item) => item.releaseDate < formattedDate);
        setMovies(filteredData);
      setLoading(false);

      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);

  return (
    <div className="movie-container d-flex justify-content-center">
    <div className="homemovies-container">
      <h3 className="text-center pt-5">Movies In Cinema Now</h3>
      <div className="containers card-container">
      { 
      loading ?
      
  <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
    :

movies.map((d) => (
               <Link to={`/timeslot/${d.id}`}>
              <div className={`card mt-3 ${showCard ? 'show' : 'hide'}`}>
                <div className="card-image-container">
                  <img src={`../images/${d.image}`} alt={d.title} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{d.title}</h5>
                  <p className="card-text">{d.language}</p>
               
              
                </div>
              </div>
              </Link>


          ))}
        </div>
      </div>
      </div>


  );
}

export default Homemovies;
