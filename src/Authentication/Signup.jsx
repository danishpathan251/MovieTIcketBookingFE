import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

// import { Toast } from 'react-bootstrap';

function Signup() {

    const[firstname, setFirstname] = useState();
    const[lastname, setLastname] = useState();
    const[email, setEmail] = useState();
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
    const[roles, setRoles] = useState("User");
    // const[recipient, setRecipient] = useState();

    // setRecipient(email);

    const handlesubmit = () =>{
        const data = {firstname, lastname,email,password,username,roles};


        axios.post(`${process.env.REACT_APP_BASE_URL}/home/registration`,data).then((res) =>{
            console.log("Successfully Insert response", res.status);
          
            if(res.status === 400){
              Swal.fire(
                'Already Exist',
                'Your Email already Exist',
                'errors'
              )

            }else if(res.status === 200){
            // console.log("Successfully Insert");
            // alert("Successfully Insert");

            
const content = `
Subject: Movie Ticket Booking - Account Successfully Created

Dear ${firstname} ${lastname},

We are delighted to inform you that your account has been successfully created at Movie Ticket Booking. Thank you for choosing our platform to book your movie tickets. Your convenience and entertainment are our top priorities, and we are excited to serve you!

Your account details are as follows:
Username: ${username}
Email: ${email}

With your account, you can easily explore the latest movies, check showtimes, and reserve seats at your favorite theaters. Moreover, you will receive exclusive updates about upcoming movie releases, special offers, and exciting promotions.

At Movie Ticket Booking, we strive to provide you with a seamless movie ticket booking experience. Whether it's a thrilling action movie, a heartwarming romance, or a laugh-out-loud comedy, we've got you covered!

If you have any questions or need assistance, please don't hesitate to reach out to our customer support team. They are available 24/7 to help you with any inquiries.

Once again, thank you for choosing Movie Ticket Booking. We look forward to providing you with an unforgettable cinematic experience.

Happy movie watching!

Best regards,
The Movie Ticket Booking Team
   
   
   `;
   const subject = "Movie Ticket Booking";

   const emailData = {recipient: email,subject,content};
   console.log("Email Data", emailData);
      axios.post(`${process.env.REACT_APP_BASE_URL}/email/sendEmail`, emailData)
      .then(response => {
     console.log('Email sent successfully');
     toast("Your Account has been created successfully!");
     
   })
      .catch(error => {
          console.error('Failed to send email:', error);
   });

   Swal.fire(
    'SuccessFull',
    'Your Account has been Created',
    'success'
  )
          }
          else{
            Swal.fire(
              'Already Exist',
              'Your Email already Exist',
              'errors'
            )
          }
        });

      

        // window.location.reload();
        // setTimeout(() => {
        //   window.location.reload();
        // }, 3000);
    } 

    
  
  return (

    <>
    
    <div className="loginform ">
    <div className="login flex">
      <div className="facebook-page flex">
        <div className="text-center">

          <h1>Movie Ticket Booking</h1>
          <p>Book Your Ticket From Our Website</p>
          <p>Sign Up to get Exciting Offers</p>
        </div>

        <div className="form">
        <input type="text" onChange={(e) => setFirstname(e.target.value)} placeholder="Enter FirstName"/>
        <input type="text" onChange={(e) => setLastname(e.target.value)} placeholder="Enter LastName" />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
        <input type="email"  onChange={(e) => setUsername(e.target.value)}  placeholder="Enter Username" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"  />
        <div className="link">
        <button className="login-btn" type="button" onClick={handlesubmit}>Create</button>
        <a className="forgot" href="#!">Forgot password ?</a><br></br>
      </div>
{/* <hr></hr> */}
        {/* <div className="button">
          
              <a className="" href="#!">Create Your Account</a>

</div> */}

</div>  {/* form */}
        </div>
       
      </div>
    </div>
    
    </>
    // <div className="" id="mycon1">
    // <div className="container-fluid py-5 h-100">
    //   <div className="row d-flex justify-content-center align-items-center h-100">
    //     <div className="col col-xl-10">
    //       <div className="card" id="mycard" > {/* style="border-radius: 1rem;"*/}
    //         <div className="row g-0">
    //           <div className="col-md-6 col-lg-5 d-none d-md-block">
    //             <img src=""
    //               alt="login form" className="img-fluid"  /> {/* style="border-radius: 1rem 0 0 1rem;"*/}
    //           </div>
    //           <div className="col-md-6 col-lg-7 d-flex align-items-center">
    //             <div className="card-body p-4 p-lg-5 text-black">
  
    //               <form>
  
    //                 <div className="d-flex align-items-center mb-3 pb-1">
    //                   <i className="fas fa-cubes fa-2x me-3"id="mylogo" ></i> {/* style="color: #ff6219;"*/}
    //                   <span className="h1 fw-bold mb-0">Movie Ticket Booking</span>
    //                 </div>
  
    //                 <h5 className="fw-normal mb-3 pb-3" id="signinmsg">Sign Up into your account</h5> {/* style="letter-spacing: 1px;"*/}
  
    //                 <div className="form-outline mb-4">
    //                   <input type="text" id="form2Example17" className="form-control form-control-md" onChange={(e) => setFirstname(e.target.value)}/>
    //                   <label className="form-label">First Name</label>
    //                 </div>

    //                 <div className="form-outline mb-4">
    //                   <input type="text" id="form2Example17" className="form-control form-control-md" onChange={(e) => setLastname(e.target.value)}/>
    //                   <label className="form-label">Last Name</label>
    //                 </div>


    //                 <div className="form-outline mb-4">
    //                   <input type="email" id="form2Example17" className="form-control form-control-md" onChange={(e) => setEmail(e.target.value)} />
    //                   <label className="form-label">Email address</label>
    //                 </div>

    //                 <div className="form-outline mb-4">
    //                   <input type="text" id="form2Example17" className="form-control form-control-md" onChange={(e) => setUsername(e.target.value)} />
    //                   <label className="form-label">Username</label>
    //                 </div>


    //                 <div className="form-outline mb-4">
    //                   <input type="password" id="form2Example27" className="form-control form-control-md" onChange={(e) => setPassword(e.target.value)}/>
    //                   <label className="form-label">Password</label>
    //                 </div>
  
    //                 <div className="pt-1 mb-4">
    //                   <button className="btn btn-dark  btn-block" type="button" onClick={handlesubmit}>Sign Up</button>
    //                 </div>
  
                 
    //               </form>
  
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
  )
}

export default Signup;