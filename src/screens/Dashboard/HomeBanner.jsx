import React from 'react';
// import './css/banner.css';
import banner1 from './css/banner2.png';
import banner from './images/banner4.jpeg';
import './css/banner.css';

import Carousel from 'react-bootstrap/Carousel';

import spiderman from './images/banner2.png';
import { Button } from 'react-bootstrap';
// import AutoScrollCarousel from './AutoScrollCarousel';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';  

function HomeBanner() {
  return (
   <>
    <div className="banner container h-50 w-100">
      {/* <img src={spiderman} /> */}
      <div className="banner-content h-25">
      {/* <h1 className="p-5">Book Your Ticket Now!</h1> */}
      <img src={banner} height="220" width="100%"></img>
      {/* <Button>Book Now</Button> */}
      </div>
    
      
    </div>



   </>
  )
}

export default HomeBanner;