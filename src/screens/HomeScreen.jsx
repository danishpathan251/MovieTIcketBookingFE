import React from 'react';

// import spiderman from './banner/spiderman.jpg'
//  import axios from 'axios';
// import { Row, Col } from "react-bootstrap";
// import  Products from '../products';

// import ProductScreen from './ProductScreen';
// import { useState } from "react";
// import { useEffect } from "react";
import HomeBanner from './Dashboard/HomeBanner';
import Homemovies from './Dashboard/Homemovies';
import Upcomingmovie from './Dashboard/Upcomingmovie';
// import MovieCard from './Dashboard/MovieCard';
import Footer from './Footer';
// import Navbar from '../src/component/Navbar';
import VocherComponent from './VocherComponent';

// import './index.css';


const HomeScreen = () =>{


  return (
    <>
    {/* <Navbar/> */}
    
    {/* <MovieCard/> */}

    <HomeBanner/>
    <Homemovies/>

    <VocherComponent/>

   <Upcomingmovie/>

</>

  )
}
export default HomeScreen;