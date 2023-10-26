import React, { useState } from 'react';
import './App.css';
import Login from './Authentication/Login';

import HomeScreen from './screens/HomeScreen';
// import Header from './component/Header';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BookingHistory from './screens/BookingHistory';
// import BookingSeats from './screens/BookingSeats';
import Signup from './Authentication/Signup';
import CheckConnection from './component/CheckConnection';

import VoucherComponent from './screens/VocherComponent';
// import Voucher from './screens/Voucher';

// {For Admin}
import AddShows from './Admin/AddShows';
// import ShowsList from './Admin/ShowList';
import UserDetails from './Admin/UserDetails';
import Seat from './component/Seat';
import BookingForm from './screens/BookingForm';
import Ticket from './screens/Ticket';
import Profile from './screens/Profile';
// import SeatSelection from './component/SeatSelection/index';

import Timeslot from './screens/Timeslot';
import SeatSelection from './screens/Seat/SeatSelection';
// import SeatBookingForm from './screens/Seat/SeatBookingForm';
import Theatre from './Admin/Theatre';
import Movie from './Admin/Movie';
import Extra from './Extra';
import SeatSelection2 from './screens/Seat/SeatSelection2';
import './SeatSelection.css'; 
import ShowsList from './screens/ShowsList';
import Footer from './screens/Footer';
import Notfound from './screens/Notfound';
import Articles from './screens/Articles';
import AddArticles from './Admin/AddArticles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AddVouchers from './Admin/AddVouchers';

function App({ location }) {

  
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
     setIsOpen(true);
     console.log("You Select");
   };
 
   const closeModal = () => setIsOpen(false);
  return ( 



    <Router>
   
        {/* {isOpen && <CheckConnection closeModal={closeModal}/>} */}
    {/* <Header /> */}
    <Navbar/>
    {/* <CheckConnection/> */}
    

  
<Routes>
      <Route path="*" element={<Notfound/>} />
      <Route path="/" element={<HomeScreen/>} exact={true}/>
      <Route path="/BookingHistory" element={<BookingHistory/>} exact={true} />
      <Route path="/timeslot/:uid/"  element={<Timeslot/>} exact={true} />
      <Route path="/bform/:id/:Seatsbook"  element={<BookingForm/>} exact={true} />
      <Route path="/ticket" element={<Ticket/>} exact={true} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/VoucherComponent" element={<VoucherComponent/>}/>
      <Route path="/Articles" element={<Articles/>}/>
      {/* <Route path="/BookingSeats" element={<BookingSeats/>} /> */}


      {/* For Admin User */}

      <Route path="/addShows" element={<AddShows/>} />
      <Route path="/addtheatre" element={<Theatre/>} />
      <Route path="/addmovie" element={<Movie/>} />
      {/* <Route path="/showsList" element={<ShowsList/>} /> */}
      <Route path="/userDetails" element={<UserDetails/>} />
      <Route path="/addVoucher" element={<AddVouchers/>} />
      <Route path="/addArticles" element={<AddArticles/>} />

      {/* <Route path="/seat" element={<Seat/>} /> */}
      {/* <Route path="/timeslot" element={<Timeslot/>} /> */}
      <Route path="/extra" element={<Extra/>} />
      <Route path="/showlist" element={<ShowsList/>} />


      <Route path="/seatSelection/:id/" element={<SeatSelection/>} />
      <Route path="/seatSelection2/:id/" element={<SeatSelection2/>} />
      {/* <Route path="/seatbookingform/:id/:time" element={<SeatBookingForm/>} /> */}

      {/* <Route path="/nextpage/:" element={<SeatBookingForm/>} /> */}

      {/* <Redirect path="/" /> */}





      </Routes>

 
      <Footer/>
    </Router>
    
  );
}

export default App;
