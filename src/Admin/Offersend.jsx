import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import banner2 from './banner2.png';
import { ToastContainer, toast } from 'react-toastify';

function Offersend() {

    const[email,setEmail] = useState();
    const subject = "Movie Ticket Booking";

    const headers = {
        "Content-Type": "text/html", // Set the content type to HTML
      };

    const handleSubmit = () =>{

        const content = `
        Subject: Movie Ticket Booking - Account Successfully Created
        
        Dear Danish Khanan,
        
        We are delighted to inform you that your account has been successfully created at Movie Ticket Booking. Thank you for choosing our platform to book your movie tickets. Your convenience and entertainment are our top priorities, and we are excited to serve you!
        
        Your account details are as follows:
        Username: danishkhan
        Email: ${email}
        
        With your account, you can easily explore the latest movies, check showtimes, and reserve seats at your favorite theaters. Moreover, you will receive exclusive updates about upcoming movie releases, special offers, and exciting promotions.
        
        At Movie Ticket Booking, we strive to provide you with a seamless movie ticket booking experience. Whether it's a thrilling action movie, a heartwarming romance, or a laugh-out-loud comedy, we've got you covered!
        
        <!-- Embedding the image -->
        <img src="${banner2}" alt="Movie Ticket Booking Image" />
        
        If you have any questions or need assistance, please don't hesitate to reach out to our customer support team. They are available 24/7 to help you with any inquiries.
        
        Once again, thank you for choosing Movie Ticket Booking. We look forward to providing you with an unforgettable cinematic experience.
        
        Happy movie watching!
        
        Best regards,
        The Movie Ticket Booking Team
        `;
        
   const subject = "Movie Ticket Booking";

   const emailData = {recipient: email,subject,content};
   console.log("Email Data", emailData, { headers });
      axios.post(`${process.env.REACT_APP_BASE_URL}/email/sendOfferEmail`, emailData)
      .then(response => {
     console.log('Email sent successfully');
     toast("Your Account has been created successfully!");
     
   })
      .catch(error => {
          console.error('Failed to send email:', error);
   });
}
      

    
  return (
    <div className="offer-form">
        <div className="container">
            <div className="email-field">
                <input type="text" className="email form-control" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="email-field">
                <button className="form-control mt-5 btn btn-primary" onClick={handleSubmit}>Send Email</button>
            </div>

        </div>

    </div>
  )
}

export default Offersend;