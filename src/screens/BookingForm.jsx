import React, { useEffect, useState } from 'react';
import './css/bookingform.css';
import {useParams, useLocation} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Modal from './Modal/Modal';
import axios from 'axios';
import Voucher from './Voucher';
import Footer from './Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import RotateLoader from "react-spinners/RotateLoader";



// import emailjs from 'emailjs-com';


const name = localStorage.getItem("uname");
// const userid = localStorage.getItem("userid");



// const myarray = localStorage.getItem('myArray');
// const storedArray = JSON.parse(localStorage.getItem('myArray'));

function BookingForm() {

   const[loading,setLoading] = useState(false);

   const navigate = useNavigate();

   const [isOpen, setIsOpen] = useState(false);

   const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => setIsOpen(false);
   
const location = useLocation();


// console.log(myarray);

   // const [price,setPrice] = useState();
   const[uname, setUname] = useState();
   const[uid, setUid] = useState();
   // const[userid, setUserid] = useState();
   const[firstname, setFirstName] = useState();
   const[lastname, setLastName] = useState();
   const [total, setTotal] = useState(0);
   const [email,setEmail] = useState();
   const [mnumber,setMnumber] = useState();
   const [date,setDate] = useState();
   const[time,setTime] = useState();
   const[record,setRecord] = useState([]);
   const[moviename,setmoviename] = useState();


   const[recipient,setRecipient] = useState();
   const[code,setCode] = useState();
   const[AnnualAmount,setAnnualAmount] = useState(0);
   const {id} = useParams();
   // const {time} = useParams();
   // const {date} = useParams();
   const {Seatsbook} = useParams();

const storedArray = JSON.parse(Seatsbook);

const seatNumbers = storedArray.map((storedArray) => storedArray);
const seatNumbersString = seatNumbers.join(', ');

const [price,setPrice] = useState();

   const [numSeats, setNumSeats] = useState();
   const [seats, setSeats] = useState([]);
   // const [inputValue, setInputValue] = useState();

   const [movieDetail, setMovieDetail] = useState([]);
    const[theaterdetail, setTheaterDetail] = useState([]);

   
   const newSeats = [];
  
    useEffect(() =>{
 
   setLoading(true);

      console.log(id);
      axios.get(`${process.env.REACT_APP_BASE_URL}/public/getshows/${id}`).then((res) =>{
         setRecord(res.data);
         setPrice(res.data.price);
         setAnnualAmount(res.data.price*storedArray.length);
         
         console.log("shows Detail", res.data);
         console.log("theatreid", res.data.theaterId);
         // console.log("theatreid", res.data.movieId);
         axios.get(`http://localhost:8899/public/getMovie/${res.data.moviesId}`).then((res) => {

         // setMovieUrl(res.data.image);
         setMovieDetail(res.data);
          setLoading(false);

         // console.log(res.data.image);
      
         });

         axios.get(`http://localhost:8899/public/theatrelist/${res.data.theaterId}`).then((res) => {

         // setMovieUrl(res.data.image);
         setTheaterDetail(res.data);
         console.log(res.data);
      
         });
     
       });
      axios.get(`http://localhost:8899/home/getuser/${name}`).then((res)=>{

         setEmail(res.data.email);
         setMnumber(res.data.mnumber);
         setFirstName(res.data.firstname);
         setLastName(res.data.lastname);
         setUid(res.data.id);
            // console.log(firstname);

       
       
         
      setRecipient(res.data.email);

  

      });
   setUname(name);
   setTotal(storedArray.length);
   // setAnnualAmount(price*storedArray.length);



   


    },[]);


   const VoucherCode = () =>{

     axios.get(`http://localhost:8899/admin/Vouchers/${code}`).then((res) =>{
         console.log("Vocuher Respone is", res.data)
      if(res.status == 200)
            if(res.data.discount != null){
               var annual = (total * price) - res.data.discount;
               setAnnualAmount(annual);
               console.log("You select annual", annual);
            }
            else if(res.data.interestRate != null){
               var annual = (total * price) - (res.data.discount);
               setAnnualAmount(annual);



            }
            else{
               Swal.fire(
                  'Incorrect',
                  'Your Voucher is Incorrect',
                  'error'
                )
            }
      else{
         Swal.fire(
            'Booked',
            'Your Seats is Booked',
            'success'
          )
      }
     });

 
   }

    const handleSubmit = () => {

      for (let i = 0; i < storedArray.length; i++) {
         newSeats.push({  showId: id, seatNumber:storedArray[i], userId:uid });
   
       }
       setSeats(newSeats);

 
   console.log("the seats",newSeats);

   axios.post("http://localhost:8899/public/addbooking",newSeats).then(res =>{

   // setMovieUrl(res.data.image);
   
         

       


         // alert(res);
   });
   const content = `
Dear ${firstname} ${lastname},

We hope this email finds you well. Thank you for choosing our online ticketing platform for your movie experience. This email is to confirm your recent movie ticket booking and provide you with all the necessary details for your upcoming cinema visit.\n
\n
Booking Details:\n
Movie: ${movieDetail.title}\n
Cinema: ${theaterdetail.name}\n
Date: ${record.showsdate}\n
Time: ${record.showstime}\n
Seats: ${Seatsbook}\n
Total Amount: ${total * price}
\n



Please note the following important information:

1. Ticket Redemption:
   - To redeem your tickets, please present the following at the cinema counter:
     - A printout or digital copy of this email.
     - Valid identification matching the ticket holder's name.
   - We recommend arriving at the cinema at least 15 minutes before the scheduled showtime to avoid any inconvenience.

2. Cancellation and Refunds:
   - If you need to cancel your booking, please refer to our website or contact our customer support for the cancellation policy and refund options available to you.

3. Additional Services:
   - Concessions and additional services may vary depending on the cinema. For any specific requests or inquiries, please reach out to the cinema directly.

We sincerely hope you enjoy your movie experience. If you have any questions, concerns, or need further assistance, please don't hesitate to contact our customer support team. We are available [customer support hours and contact details].

Thank you once again for choosing our online ticketing platform. We value your business and look forward to serving you in the future.

Best regards,
Movie Ticket Booking
   
   
   `;
   const subject = "Movie Ticket Booking";

   const emailData = {recipient,subject,content};
   console.log("Email Data", emailData);
   axios.post('http://localhost:8899/email/sendEmail', emailData)
   .then(response => {
     console.log('Email sent successfully');
   })
   .catch(error => {
     console.error('Failed to send email:', error);
   });

      console.log(storedArray.length);
      // alert("You");
      // openModal(true);
      Swal.fire(
         'Booked',
         'Your Seats is Booked',
         'success'
       )

       setTimeout(() => {
         navigate('/');
       }, 3000);

    }


  return (
    // <div>BookingForm</div>
    <>


<div className="loginform ">
    <div className="login flex">
      <div className="facebook-page flex ">
        <div className="text-center bg-white">

     
                    { 
      loading ?
     
          <div className="loader d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
      
     
    :     <img src={`../../images/${movieDetail.image}`} width="300" height="400" alt="" />
                    }     
        </div>

        <div className="form">
        {/* <input type="email"  onChange={(e) => setUsername(e.target.value)}  placeholder="Enter Username" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"  />
        <div className="link">
        <button className="login-btn" type="button" onClick={handlesubmit}>Login</button>
        <a className="forgot" href="#!">Forgot password ?</a><br></br>
      </div> */}
      <div className="b">

         <h4><b>Summery</b></h4>
      </div>

<div>
                  <b>Movie Name: </b>{movieDetail.title}
               </div>
               <div>
                  <b>Movie Date: </b>{record.showsdate}
               </div>
               <div>
                  <b>Shows Time: </b>{record.showstime}
               </div>
               <div>
                  <b>Seat Numbers: </b>{seatNumbersString}
               </div>
               <div>
               <b>Total: </b>{total * price}

               </div>
               <div>
               Redeem Code: <input type="text" name="voucher" id="voucher" placeholder=" Enter Code" value={code} onChange={(e) => setCode(e.target.value)}/>
                              <Button  onClick={VoucherCode}>Apply</Button>

               </div>
               <div>
               <div className="pt-5">
               <b>Annual Amount: </b>{AnnualAmount}

               </div>
</div>
<hr></hr>
        {/* <div className="button">
          
              <a className="" href="#!">Create Your Account</a>

</div> */}
  <Button className='submit-btn'  onClick={handleSubmit}>Pay Now</Button>

</div>  {/* form */}
        </div>
       
      </div>
    </div>

    </>
  )
}

export default BookingForm;