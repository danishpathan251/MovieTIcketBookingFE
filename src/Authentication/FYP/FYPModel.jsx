import React, { useEffect,useState } from 'react';
// import './Modal.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const name = localStorage.getItem("uname");

const uid = localStorage.getItem('userid');



const FYPModel = ({ closeModal}) => {
 
    const [isVisible1, setIsVisible1] = useState(true);
    const [isVisible2, setIsVisible2] = useState(true);
    const [isVisible3, setIsVisible3] = useState(false );
 
    // var randomOtp = 12345;

  // document.body.style.overflowY = "hidden";
  //   return() =>{
  //     document.body.style.overflowY = "scroll;"
  //   };
// const data = [{
//   firstname:"Danish Khan",
//   lastname:"Pathan",
//   email:"khdandanish.9       45@gmail.com",
//   mnumber:7984368507,
//   username:"danishkhan"
// }]
const id = uid;
const[firstname,setFirstname] = useState();
    const[lastname,setLastname] = useState();
    const[mnumber,setMnumber] = useState();
    const[email,setEmail] = useState();
    const[username,setUsername] = useState();

    const[userId, setUserid] = useState();
    const[roles, setRoles] = useState();
    const[recipient,setRecipient] = useState();
    const[user,setUser] = useState([]);
    // const[code,setCode] = useState();
const[otp,setOtp] = useState();
    
const[votp,setVotp] = useState();

const[enablediv, setEnablediv] = useState("enablediv");
    const[varifiediv, setVarifiediv] = useState();
const[pvarifiediv, setPvarifiediv] = useState();
    const[passworddiv, setPassworddiv] = useState();
    const[otpdiv, setOTPdiv] = useState("enablediv");

    const[password,setPassword] = useState();
    const[Cpassword,setCpassword] = useState();
    const[otpmatch, setOtpmatch] = useState();
    const[match,setMatch] = useState("");

const data = {id,firstname,lastname,email,mnumber,username,roles};




useEffect(() => {
    const randOtp = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number

    setOtp(randOtp.toString());
}, []);
useEffect(()=>{

// console.log("THe otp isd",otp);
 

if(password != null &&  Cpassword !== null){
if(password == Cpassword){
    setMatch("Password Matched");
    setPvarifiediv("varifiediv");
}
else{
    setMatch("Password not Matched");
    setPvarifiediv("notvarifiediv");
}
}

},[password,Cpassword])


const sendOtp =() =>{

    axios.get(`http://localhost:8899/home/check-email/${recipient}`).then((response) => {
        // setUser(response.data);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setUserid(response.data.id);
        // console.log("User Details",user);
        // console.log("Response Data",response.data.firstname);
    })

    setOTPdiv("");
    setVarifiediv("varifiediv");
    setPassworddiv("passworddiv");
  
// console.log(`response.data: ${response.data} && ${user}`);

    const content = `
    Dear Customer,

    We hope this email finds you well. It appears that you've forgotten your password for your Movie Ticket Booking account. We understand how important it is for you to regain access to your account swiftly and securely. To assist you with this, we've implemented an OTP (One-Time Password) verification process to reset your password.
    
    Here's how you can reset your password using the OTP: ${otp};
    
    1. Visit the Movie Ticket Booking website: [Insert Website URL]
    
    2. Click on the "Sign In" or "Log In" button located at the top right corner of the homepage.
    
    3. On the login page, click on the "Forgot Password?" or "Reset Password" link. This will initiate the password reset process.
    
    4. You will be prompted to enter your registered email address. Please make sure to provide the email address associated with your Movie Ticket Booking account.
    
    5. After entering your email address, click the "Submit" or "Reset Password" button.
    
    6. Check your email inbox for a password reset email. This email should arrive within a few minutes. If you don't see it in your inbox, please check your spam or junk folder.
    
    7. Open the password reset email, and you will find an OTP provided.
    
    8. Return to the Movie Ticket Booking website and enter the OTP you received into the designated field.
    
    9. Once you've entered the OTP, you will be directed to a page where you can create a new password for your account.
    
    10. Enter your new password and confirm it.
    
    11. Click "Save" or "Reset Password."
    
    Your Movie Ticket Booking account password will now be updated. You can use your new password to log in securely and enjoy a seamless booking experience.
    
    If you did not request a password reset or have any concerns regarding the security of your account, please contact our customer support team immediately at [Customer Support Email] or [Customer Support Phone Number]. Your account security is of utmost importance to us, and we are here to assist you promptly.
    
    Thank you for choosing Movie Ticket Booking for all your movie ticket needs. We look forward to serving you again soon.
    
    Best regards,
    
    
    Movie Ticket Booking
    [Website URL]
    [Contact Information]
       
       
       `;
       const subject = "Reset Your Movie Ticket Booking Password with OTP";
    
       const emailData = {recipient,subject,content};
       console.log("Email Data", emailData);
       axios.post('http://localhost:8899/email/sendOtpEmail', emailData)
       .then(response => {
         console.log('Email sent successfully');
       })
       .catch(error => {
         console.error('Failed to send email:', error);
       });
    
        //   console.log(storedArray.length);
          // alert("You");
        //   openModal(true);

        setIsVisible1(false);
        setIsVisible3(true);
    
        }

        const submitOtp = () =>{
            if(votp == otp){
                setOtpmatch("Matched");
                setEnablediv("");
                

            }
            else{
                setOtpmatch("Check OTP");
                setEnablediv("enablediv");

            }
        }
        const handleUpdate = () =>{
            // console.log("Run",password)

            if(password != null &&  Cpassword !== null){
                if(password == Cpassword){
                    
                    axios.put(`http://localhost:8899/home/${userId}/update-password`,{password:password}).then(res =>{
          
                    // alert(res.status);
                    // console.log("The result" ,res.data)
                    

                    
                });

                    setMatch("Password Matched");
                    setPvarifiediv("varifiediv");
                    closeModal();

                    Swal.fire(
                        'Successfully Updated',
                        'Your Password hase been updated',
                        'success'
                      )


                }
                else{
                    setMatch("Password not Matched");
                    setPvarifiediv("notvarifiediv");
                }
                }
         
          
          }
    
  return (
    <>
      
      <div className="modal-wrapper"></div>
  <div className="modal-container">
  <span className="close"onClick={closeModal}>&times; &nbsp;</span>
    <div className="modal-header pt-5 mx-3 border-bottom text-center"><h2>Forgot Your Password</h2></div>
    <div className="modal-body px-2 pt-5 fypmodel">
    {isVisible1? (<>
                         <div className={`row mt-3 px-3 ${passworddiv}`}>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input type="text" className="form-control" placeholder="Your Email Id" value={email} onChange={(e) => setRecipient(e.target.value)}/>
                                </div>
                                    <span className={`text-center ${varifiediv}`}>varified</span> 
                        </div>

                                <div className="row mt-3 pt-2"> 
                                        <div className=" text-center">
                                            <button className="btn btn-primary profile-button" type="button" onClick={sendOtp} >Send OTP</button>    
                                        </div> 
                                </div> 
                                      
                                <hr></hr>
                                </>      ) : null}  
                                
                                {isVisible2 ? (<>
                                  <div className={otpdiv}>         
                                 
                           
                                  <div className="row mt-3 px-3"> <div className="col-md-12">
                                        <label className="labels" >Enter OTP</label>
                                        <input type="text" className="form-control" placeholder="Enter OTP" value={username} onChange={(e) => setVotp(e.target.value)}/> 
                                    
                                        <span className={`text-center ${pvarifiediv}`}>{otpmatch}</span>          

                                  </div>
                                </div>

                                <div className="row"> 
                                                  
                                                  </div> <div className="mt-2 text-center"><button className="btn btn-primary profile-button" type="button" onClick={submitOtp} >Submit OTP</button>
                                                  
                                                
                                                
                                                </div>
  
                                  
                                </div>  

                                      </>      ) : null}      
                                <hr></hr>
                                    
                                {isVisible3 ? (<>
                                 <div className={enablediv}>         
                                 
                                <div className="row mt-3 p-3">
                                    <div className="col-md-12">
                                        <label className="labels">New Password</label>
                                        <input type="text" className="form-control" placeholder="Enter New Password" value={mnumber} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                  
                                  <div className="row mt-3 pt-3"> <div className="col-md-12">
                                        <label className="labels" >Confirm Password</label>
                                        <input type="text" className="form-control" placeholder="Enter Confirm Password"value={username} onChange={(e) => setCpassword(e.target.value)}/>
                                        <span className={`text-center ${pvarifiediv}`}>{match}</span> 
                                  </div>
                                </div>
                                  
                                  </div>     
                                  

                                  
     
                                  </div> 
     
                                     
                                                
                                                 <div className="row"> 
                                                  
                                                   </div> <div className="mt-2 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleUpdate} >Update Your Password</button>
                                                   
                                                 
                                                 
                                                 </div>
   
                                                 </>      ) : null}     



  </div>
  </div>

</>
     
  );
};

export default FYPModel;