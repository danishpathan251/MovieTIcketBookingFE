import React,{useState, useEffect} from 'react';
import './css/moviecard.css';
import { Button } from 'react-bootstrap';
// import movies from './json/movies';
import axios from 'axios';


function MovieCard() {


    const[movies,setMovies] = useState([]);

  
    useEffect(() => {
      // Fetch the image path from the backend API
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/public/getMovie`) 
        .then((response) => {
          console.log("the",response.data);
          // Set the image path received from the backend
          setMovies(response.data);
        })
        .catch((error) => {
          console.error('Error fetching image:', error);
        });
    }, []);

  return (

    <>
     <div className="bg-white my-5">
{/* <h3 className="title p-4 border-bottom">Upcoming Movies !</h3> */}
<div className="text-center align-items-center pt-5"><h3>Movie In Cinema Now</h3> </div>
    <div className="container movie-card-container">


{movies.map((d) =>(
        <div className="movie-card">
             {/* <img className="card-img-top" src={d.image} alt = {d.image} height="300px"/> */}
             <img className="card-img-top" src={`../images/${d.image}`} alt = {d.image} height="300px"/>
            <div className="movie-title">{d.title}</div>
            <div className="movie-Language">Hindi</div>
            <div className="movie-Button">
                <Button>Book Now</Button>
            </div>

            
        </div>

))} 
      
</div>
    </div>

    </>
  )
}

export default MovieCard;