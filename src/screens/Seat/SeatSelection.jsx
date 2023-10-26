import React, { useState, useEffect } from 'react';
import './SeatSelection.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Movieseat from './movieseats.jpeg';
import { Button } from 'react-bootstrap';


const SeatSelection = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [reservedSeats, setReservedSeats] = useState([]);

  // Fetch reserved seats data from the server
  useEffect(() => {
    axios
      .get(`http://localhost:8899/public/seats/${id}`)
      .then((response) => {
        setReservedSeats(response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch reserved seats:', error);
      });
  }, [id]);

  const handleSeatClick = (seatNumber) => {
    // Check if the seat is already selected or reserved
    if (selectedSeats.includes(seatNumber) || reservedSeats.includes(seatNumber)) {
      // Deselect the seat
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      // Select the seat
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const Seatsbook = JSON.stringify(selectedSeats);

  console.log(reservedSeats);

  return (
    <>
      <div className="seat-selection-container">
        <h2 className="p-3">Movie Ticket Seat Selection</h2>
      
        <div className="seat-grid">
          {Array.from({ length: 8 }, (_, row) => (
            <div key={row} className="seat-row">
              {Array.from({ length: 10 }, (_, seat) => {
                const seatNumber = row * 10 + seat + 1;
                const isSeatSelected = selectedSeats.includes(seatNumber);
                const isSeatReserved = reservedSeats.includes(seatNumber);
                let seatClass = '';

                if (isSeatReserved) {
                  seatClass = 'reserved';
                } else {
                  seatClass = isSeatSelected ? 'selected' : 'available';
                }

                return (
                  <div
                    key={seat}
                    className={`seat ${seatClass}`}
                    onClick={() => handleSeatClick(seatNumber)}
                  >
                   {/* <img src={Movieseat} alt="djdj" value="seatnumber"  width={35} height={30}  className={`seat ${seatClass}`}/> */}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div class="theater-container mt-3 mb-5">
    <div class="screen">Screen</div>
  </div>
        <div className="seat-legend">
          <div className="available"></div>
          <span>Available</span>
          <div className="selected"></div>
          <span>Selected</span>
          <div className="reserved"></div>
          <span>Reserved</span>
        </div>

        <div className="pt-2">Seat Number: {Seatsbook}</div>

        <div className="flex align-items-center p-2">
          <Link to={`/bform/${id}/${Seatsbook}`} className="btn btn-default"><Button>Proceed</Button></Link>
        </div>
      </div>
    </>
  );
};

export default SeatSelection;
