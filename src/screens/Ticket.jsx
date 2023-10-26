import React, { useEffect, useState } from 'react';
import './css/ticket.css';
import axios from 'axios';
import ParentComponent from './card/ParentComponent';
import TicketChild from '../component/TIcketChild/TicketChild';
import RotateLoader from "react-spinners/RotateLoader";

const uid = localStorage.getItem('userid');

function Ticket() {
  const [tickets, setTickets] = useState([]);
  const [showData, setShowData] = useState([]);
  const [userid, setUserid] = useState("1");

  
  const [movies,setMovies] = useState('');
  const [movieod,setMovieid] = useState('');

  const[loading,setLoading] = useState(false);

  useEffect(() => {


    setLoading(true);
    axios.get(`${process.env.REACT_APP_BASE_URL}/home/users/${uid}`).then((res) => {
      
      setTickets(res.data);

      const showIds = [...new Set(res.data.map(item => item.shows.id))];
      setShowData(showIds);
      setLoading(false);
    
    });

  }, []);

  useEffect(() => {
    


      // Fetch the image path from the backend API
      axios
      .get(`${process.env.REACT_APP_BASE_URL}/public/getMovie`) 
      .then((response) => {
        // console.log("the",response.data);
        // Set the image path received from the backend
        setMovies(response.data);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);

      });
      setLoading(false);

  }, [showData]);

  // console.log("The movie detail", tickets.id);

  return (

    
    <>
    <div className="articles p-1">
    <ParentComponent/>
    { 
      loading ?
            
  <div className="loader bg-white d-flex justify-content-center align-items-center">
      
  <RotateLoader
  color="#0083B0"
  loading={loading}
  // size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>

</div>
:


    

    showData[0] != null ? (
  showData.map((d) => (
    <TicketChild showsId={d} />
  ))
) :  (


  <h1 className="h1 text-dark bg-white p-5 d-flex justify-content-center align-items-center noticket">You did not Booked Any Ticket</h1>
)}

    
</div>
    </>
  );
}

export default Ticket;
