import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';


const myarray = localStorage.getItem('myArray');
const storedArray = JSON.parse(localStorage.getItem('myArray'));
            
function SeatBookingForm(props) {
 
// const {myarray} = useParams();

const location = useLocation();

    const myarray = props.location.state.Seats;
    
    console.log("My array", myarray);

    var {id} = useParams();
    var {time} = useParams();

    const [numSeats, setNumSeats] = useState();
    const [seats, setSeats] = useState([]);
    const [inputValue, setInputValue] = useState();

    // const [name, setName] = useState([]);
  
    const uname = "DanishKhan";
    const handleSeatSelection = (event) => {
      const num = parseInt(event.target.value);

      setNumSeats(num);

  
      // create an array of objects with the selected number of seats
      const newSeats = [];
      for (let i = 0; i < storedArray.length; i++) {
        newSeats.push({ array:storedArray[i], name: uname, seatNumber: i, isReserved: false });
      }
      setSeats(newSeats);

    };

    const submit =() =>{
      console.log(seats);
      console.log("The localstorage",myarray);

      setInputValue(storedArray.join(', '));
      

    //   console.log(myArray);
        
    }

    // useEffect(() =>{
        
    // },[]);

    const unset = () =>{
            
            localStorage.clear();
            window.location.reload();
    }
  
    return (
        <>
      <div>
        <label htmlFor="seat-select">Select number of seats:</label>
        <select id="seat-select" onChange={handleSeatSelection}>
          <option value="0">--Select--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
  
        <div>
          <h3>Selected seats:</h3>
          <ul>
            {seats.map((seat) => (
              <li key={seat.seatNumber}>
                Seat {seat.seatNumber} - {seat.isReserved ? 'Reserved' : 'Available'}
              </li>
            ))}
          </ul>

          <ul>
            <li>{inputValue}</li>
          </ul>
        </div>
      </div>
      <button className="btn btn-primary" onClick={submit}>Submit</button>
      <button className="btn btn-primary" onClick={unset}>Submit</button>
      </>
    );
  }

export default SeatBookingForm;
