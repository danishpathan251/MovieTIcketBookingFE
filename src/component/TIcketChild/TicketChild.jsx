import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import RotateLoader from "react-spinners/RotateLoader";


const userId = localStorage.getItem('userid');
const emailId = localStorage.getItem('emailid');

function TicketChild({showsId}) {

  const[loading,setLoading] = useState(false);

    const[bookings,setBookings] = useState([]);
    const [showsdate, setShowsdate] = useState('');
  const [showstime, setShowstime] = useState('');
  const [moviename, setMoviename] = useState('');
  const [theatrename, setTheatrename] = useState('');
  const [areaname, setAreaname] = useState('');
  const[movieid,setMovieid] = useState();
  const[theatreid, setTheatreid] = useState();
  const[movieurl,setMovieurl] = useState('');
    



    useEffect(() => {
    setLoading(true);

        // Fetch bookings when userId or showsId changes
        if (userId && showsId) {
          axios.get(`http://localhost:8899/public/byUserAndShows?userId=${userId}&showsId=${showsId}`)
            .then((response) => {
              setBookings(response.data);

          setLoading(false);
            
              console.log("THe time",response.data[0].shows.moviesId);
            })
            .catch((error) => {
              console.error('Error fetching bookings:', error);
            });

            axios.get(`http://localhost:8899/public/getshows/${showsId}`).then((res) =>{

            console.log("Shows Data is check", res.data);

            setShowsdate(res.data.showsdate);
            setShowstime(res.data.showstime);
            // setMovieid(res.data.moviesId);
            // setTheatreid(res.data.theaterId);

            axios.get(`http://localhost:8899/public/movielist/${res.data.moviesId}`).then((res) =>{
                console.log("Movie List shows ->", res.data);
                setMoviename(res.data[0].title);
                setMovieurl(res.data[0].image)

            });

            axios.get(`http://localhost:8899/public/theatrelist/${res.data.theaterId}`).then((res) =>{
                // console.log("Theater List shows ->", res.data);
                setTheatrename(res.data.name);
                setAreaname(res.data.location);
                    
            });

            }
            );

           

           
        }
      }, [userId, showsId]);
      console.log("email is", emailId);

      const seatNumbers = bookings.map((booking) => booking.seatNumber);
      const seatNumbersString = seatNumbers.join(', ');
      console.log("Booking Response", bookings);

      const seatids = bookings.map((booking) => booking.id);
        console.log(seatids);
      const deleteSubmit = () =>{

        seatids.map((d) =>{
            axios.delete(`http://localhost:8899/home/delete/${d}`).then((res) =>{
                console.log("response of delete",res);

            })
      })

  
                              
    const content = `
    Subject: Movie Ticket Booking - Ticket Cancel Successfully
    

    Dear Customer,
    
    I hope this email finds you well. We would like to inform you that your movie ticket booking for ${moviename} on ${showsdate} has been successfully canceled, as per your request. Your ticket has now been deleted from our system.
    
    Here are the details of your canceled booking:
    - Movie Name: ${moviename}
    - Date: ${showsdate}
    - Time: ${showstime}
    - Seat(s): ${seatNumbersString}
    
    Your refund, if applicable, will be processed within the next three business days, and the amount will be credited to the original payment method used for the booking.
    
    We apologize for any inconvenience this may have caused and hope to have the opportunity to serve you better in the future. If you have any further questions or require assistance with a new booking or any other matter, please do not hesitate to contact our customer support team at help@movieticketbooking.com or 7984368507.
    
    Thank you for choosing Movie Ticket Booking for your movie ticket booking needs. We look forward to serving you again soon.
    
    Best regards,
    The Movie Ticket Booking Team
       
       `;
    
       const subject = "Movie Ticket Booking";
    
       const emailData = {recipient: emailId,subject,content};
       console.log("Email Data", emailData);
          axios.post(`${process.env.REACT_APP_BASE_URL}/email/sendCancelEmail`, emailData)
          .then(response => {
         console.log('Email sent successfully');
        //  toast("Your Account has been created successfully!");
         
       })
          .catch(error => {
              console.error('Failed to send email:', error);
       });

       window.location.reload();
              }
           
            

        
    
      
        
        
            // console.log("Successfully Insert");
            // alert("Successfully Insert");

    
      
  return (
    <>

{loading ?
            
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
    <div className="ticket-container m-2 shadow bg-white border row">

            
    <div className="image-container col-sm-4">

        <img  className="image" src={`../images/${movieurl}`} alt={movieurl} width="300" height="400"/>

    </div>
    <div className="text-container col-sm-8">
        <div className="info-section">
          <div className="heading"><b><i className="fa fa-map-marker"></i>Theater Name: {theatrename}</b>,<b>{areaname}</b></div>

          <ul>
        
            <li>{showsdate} </li>
            <li>{showstime}</li>
            <li><b>Seat Number:</b>{seatNumbersString}

       
            
            </li>
          </ul>

<div class="delete-field d-flex justify-content-end p-5">
            <button className="btn btn-danger" onClick={deleteSubmit}>Cancel Ticket</button>
          </div>
          </div>
          
        </div> 
    </div>
  }  </>
  )
}

export default TicketChild;