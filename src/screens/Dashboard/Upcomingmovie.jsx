import React,{useState,useEffect} from 'react';
import { Row, Col, Button } from "react-bootstrap";
import spiderman from './spiderman.jpg';
// import movies from './json/movies';
import axios from 'axios';
// import './home.css';
import {Link} from 'react-router-dom';
import RotateLoader from "react-spinners/RotateLoader";


function Upcomingmovie() {

  const[loading,setLoading] = useState(false);
   
  const[movies,setMovies] = useState([]);

  const currentDate = new Date();

  // Extract date components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const day = currentDate.getDate();

  // Create a formatted date string
  const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

//   console.log(formattedDate);


  
  useEffect(() => {

    setLoading(true);

    // Fetch the image path from the backend API
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/public/getMovie`) 
      .then((response) => {
        console.log("the",response.data);
        // Set the image path received from the backend
        const filteredData = response.data.filter(item => item.releaseDate > formattedDate);
        console.log("the",filteredData);

        setMovies(filteredData);
      setLoading(false);

      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, []);
  

    // const [movie, setmovie] = useState([]);

    // setmovie(movies);
    console.log(movies);
  return (

    <>
        <div className="movie-container d-flex justify-content-center">
     <div className="homemovies-container">
<h3 className="text-center pt-5">Upcoming Movies</h3>
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
movies.map((d) =>(
 <Link to={`/timeslot/${d.id}`}>
   <div className="col-md-4 col-sm-6" key={d.id}>
<div class="card mt-5">
  <div className="card-image-container">
<img src={`../images/${d.image}`} class="card-img-top"  />

  </div>
<div class="card-body">
  <h5 class="card-title">{d.title}</h5>
  <p class="card-text">{d.language}</p>
  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
</div>
</div>
</div>

</Link>


))} 
      

    </div>
    </div>
    </div>

 
</>
  )
}

export default Upcomingmovie;