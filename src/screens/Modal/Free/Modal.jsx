import React, { useEffect,useState } from 'react';
import './Modal.css';
import axios from 'axios';

const name = localStorage.getItem("uname");

const uid = localStorage.getItem('userid');

const Modal = ({ closeModal}) => {


  // document.body.style.overflowY = "hidden";
  //   return() =>{
  //     document.body.style.overflowY = "scroll;"
  //   };
// const data = [{
//   firstname:"Danish Khan",
//   lastname:"Pathan",
//   email:"khdandanish.945@gmail.com",
//   mnumber:7984368507,
//   username:"danishkhan"
// }]
const id = uid;
const[firstname,setFirstname] = useState();
    const[lastname,setLastname] = useState();
    const[email,setEmail] = useState();
    const[mnumber,setMnumber] = useState();
    const[username,setUsername] = useState();
    // const[userid, setUserid] = useState('1');
    const[roles, setRoles] = useState();
const data = {id,firstname,lastname,email,mnumber,username,roles};

const handleUpdate = () =>{
  axios.put(`${process.env.REACT_APP_BASE_URL}/home/update`,data).then(res =>{

    alert(res.status);
});
// console.log("The result" ,data)

}
useEffect(()=>{
 

  axios.get(`${process.env.REACT_APP_BASE_URL}/home/getuser/${name}`).then((res) =>{

  // setRecord(res.data);

  setFirstname(res.data.firstname);
  setLastname(res.data.lastname);
  setEmail(res.data.email);
  setUsername(res.data.username);
  setMnumber(res.data.mnumber);
  setRoles(res.data.roles);
  // console.log(res.data);

})
},[])

  return (
    <>
      
      <div className="modal-wrapper"></div>
  <div className="modal-container">
  <span className="close"onClick={closeModal}>&times; &nbsp;</span>
    <div className="modal-header pt-5 mx-3 border-bottom"><h2>Edit Your Profile</h2></div>
    <div className="modal-body px-2 pt-5">
    
    <div className="row mt-3 pt-3 px-3">
                                 <div className="col-md-6"><label className="labels">Name</label>
                                 <input type="text" className="form-control" placeholder=" Your First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                                 </div> <div className="col-md-6"><label className="labels">Surname</label>
                                 <input type="text" className="form-control" value={lastname} placeholder="Your Surname" onChange={(e) => setLastname(e.target.value)} /></div> </div>
                                 
                                  <div className="row mt-3 p-3"> <div className="col-md-12"><label className="labels">Phone Number</label>
                                  <input type="text" className="form-control" placeholder="Your Mobile Number" value={mnumber} onChange={(e) => setMnumber(e.target.value)} /></div>
                                  
                                  <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels" >Username</label>
                                  <input type="text" className="form-control" placeholder="Your Username"value={username} onChange={(e) => setUsername(e.target.value)}/></div></div>
                                  
     
     
                                     <div className="col-md-12 pt-3"><label className="labels">Email ID</label>
                                        <input type="text" className="form-control" placeholder="Your Email Id" value={email} onChange={(e) => setEmail(e.target.value)}/></div> 
                                            
                                           </div>
                                                
                                                 <div className="row mt-3 pt-2"> 
                                                  
                                                   </div> <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleUpdate} >Save Profile</button>
                                                   
                                                   </div> 
                                                 
                                                 
    </div>
   



  </div>


</>
     
  );
};

export default Modal;