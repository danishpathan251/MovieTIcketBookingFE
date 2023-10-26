import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
// import './SeatSelection2.css';
// import {AiTwotonePhone} from "react-icons/AiTwotonePhone";
// import { LiaChairSolid } from 'react-icons/LiaChairSolid';
// import {carseat} from './carseat.png';
import Movieseat from './movieseats.jpeg';


const SeatSelection = () => {
  var {id} = useParams();

  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);
  const totalSeats = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84];
  useEffect(() => {
    // Fetch seat data from the server
    axios.get(`http://localhost:8899/public/seats/${id}`)
      .then(response => {
        const reservedSeat = response.data;
        setReservedSeats(reservedSeat);

        // setSeats(availableSeats);
        const availableSeats = totalSeats.filter((value) => !response.data.includes(value));
        setSeats(availableSeats);
        console.log("The",availableSeats);
        console.log("The1",reservedSeats);
      })
      .catch(error => {
        console.error('Error fetching seat data:', error);
      });
  }, []);

  const handleSeatClick = (seat) => {
    if (reservedSeats.includes(seat)) {
      // Seat is already reserved, do not select it
      return;
    }

    if (selectedSeats.includes(seat)) {
      // Seat is already selected, deselect it
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      // Seat is available, select it
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const Seatsbook = JSON.stringify(selectedSeats);

  // const handleConfirmBooking = () => {
  //   // Make an HTTP GET request to check the availability of selected seats
  //   axios.get('/checkAvailability', { params: { seats: selectedSeats } })
  //     .then(response => {
  //       // Process the response and handle the booking confirmation logic
  //       // ...
  //     })
  //     .catch(error => {
  //       console.error('Error checking seat availability:', error);
  //     });
  // };

  return (
    <div>
      <h2 align="center" className="pt-5">SELECT Your Seat</h2>
      <div className="seat-grid p-5">
  {/* Render the seats */}
  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(row => (
    <div key={row} className="seat-row">
      {/* Render the row label */}
      <div className="row-label">{row}</div>
      
      {/* Render the seats in the row */}
      {Array.from({ length: 20 }).map((_, seat) => (
        <div
          key={seat}
          onClick={() => handleSeatClick(`${row}-${seat + 1}`)}
          disabled={reservedSeats.includes(`${row}-${seat + 1}`)}
        >
          {/* {seat + 1} */}
      <img src={Movieseat} alt="djdj"  width={35} height={30}  className={`seat ${reservedSeats.includes(`${row}-${seat + 1}`) ? 'reserved' : selectedSeats.includes(`${row}-${seat + 1}`) ? 'selected' : 'available'}`}/>

        </div>
      ))}
    </div>
  ))}

  {/* Render the bottom rows */}
  <div className="bottom-row">
    {/* Render the row labels */}
    <div className="row-label">I</div><br></br>
    {/* <div className="row-label">J</div> */}
    
    
    {/* Render the seats in the bottom rows */}
    {Array.from({ length: 24 }).map((_, seat) => (
    <><div
        key={seat}
        className={`seat ${reservedSeats.includes(`I-${seat + 1}`) ? 'reserved' : selectedSeats.includes(`I-${seat + 1}`) ? 'selected' : 'available'}`}
        onClick={() => handleSeatClick(`I-${seat + 1}`)}
        disabled={reservedSeats.includes(`I-${seat + 1}`)}
      >
        {/* {seat + 1} */}

      </div>
      {/* <AiTwotonePhone/> */}
      {/* <img src={Movieseat} alt={Movieseat} className="card-img-top" /> */}

      </>  
    ))}
    {/* {Array.from({ length: 12 }).map((_, seat) => (
      <div
        key={seat}
        className={`seat ${reservedSeats.includes(`J-${seat + 1}`) ? 'reserved' : selectedSeats.includes(`J-${seat + 1}`) ? 'selected' : 'available'}`}
        onClick={() => handleSeatClick(`J-${seat + 1}`)}
        disabled={reservedSeats.includes(`J-${seat + 1}`)}
      >
        {seat + 1}
      </div>
    ))} */}
  </div>

  
</div>


      {/* <button onClick={handleConfirmBooking}>Confirm Booking</button>
       */}
       <div className="align-items-center p-5" align="center">
         <Link
          className="btn btn-primary" to={`/bform/${id}/${Seatsbook}`}>Proceed</Link>

       </div>

    </div>
  );
};

export default SeatSelection;
