import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './login.css';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import logo from './thumb.webp';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FYPModel from './FYP/FYPModel';


const uname = localStorage.getItem('uname');



const Login = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
     setIsOpen(true);

   };
 
   const closeModal = () => setIsOpen(false);


const navigate = useNavigate();


  const[name, setName] = useState();

    const[username, setUsername] = useState();
    const[password, setPassword] = useState();
  const[decodedToken, setDecodedToken] = useState();

    const handlesubmit = () =>{
        const data = {username,password};


        axios.post(`${process.env.REACT_APP_BASE_URL}/home/authentication`,data).then(response =>{
        if(response.status === 200){
          const result = localStorage.setItem("token", JSON.stringify(response.data));
          localStorage.setItem("uname", username);
          

            axios.get(`${process.env.REACT_APP_BASE_URL}/home/getuser/${username}`).then(res =>{

            localStorage.setItem("userid", JSON.stringify(res.data.id));
            localStorage.setItem("emailid", JSON.stringify(res.data.email));
            localStorage.setItem("usertype", JSON.stringify(res.data.roles));

            //  console.log("Danish",res.data.id);

       });


          setName(result);

  window.location.reload();

        }

        else{
          toast("Incorrect Password");
        }
      })  

    }
    useEffect(()=>{

      if(uname != null ){
      navigate('/');

      }
    },[])
  
  
  return (
<>


    <ToastContainer />
    {isOpen && <FYPModel closeModal={closeModal}/>}
    
    <div className="loginform ">
    <div className="login flex">
      <div className="facebook-page flex">
        <div className="text-center">

          <h1>Movie Ticket Booking</h1>
          <p>Book Your Ticket From Our Website</p>
          <p>Sign Up to get Exciting Offers</p>
        </div>

        <div className="form shadow">
        <input type="email"  onChange={(e) => setUsername(e.target.value)}  placeholder="Enter Username" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"  />
        <div className="link">
        <button className="login-btn" type="button" onClick={handlesubmit}>Login</button>
        <a className="forgot" href="#!" onClick={openModal}>Forgot password ?</a><br></br>
      </div>
<hr></hr>
        <div className="button">
          
              <a className="" href="/SignUp">Create Your Account</a>

</div>

</div>  {/* form */}
        </div>
       
      </div>
    </div>
   </>

  )
}

export default Login;


