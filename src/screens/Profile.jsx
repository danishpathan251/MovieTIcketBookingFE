import React, { useState } from 'react';
import './css/profile.css';
import { useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal/Free/Modal';

const name = localStorage.getItem("uname");

const uid = localStorage.getItem('userid');


function Profile() {

    const[record,setRecord] = useState([]);
    // const [name,Setname] = useState();
    // const[amount,setAmount] = useState([]);
    const[total,setTotal] = useState([]);

    const[firstname,setFirstname] = useState();
    const[lastname,setLastname] = useState();
    const[email,setEmail] = useState();
    const[mnumber,setMnumber] = useState();
    const[username,setUsername] = useState();
    const[userid, setUserid] = useState('1');

    // const [sirname]

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
       setIsOpen(true);
       console.log("You Select");
     };
   
     const closeModal = () => setIsOpen(false);

    

    useEffect(()=>{
            axios.get(`${process.env.REACT_APP_BASE_URL}/home/getuser/${name}`).then((res) =>{

                setRecord(res.data);

                setFirstname(res.data.firstname);
                setLastname(res.data.lastname);
                setEmail(res.data.email);
                setUsername(res.data.username);
                setMnumber(res.data.mnumber);
                // console.log(res.data);

            })


            axios.get(`${process.env.REACT_APP_BASE_URL}/home/totalamount/${uid}`).then(res =>{

            setTotal(res.data.reduce((sum, item) => sum + item.shows.price, 0));
            
            console.log(res.data.reduce((sum, item) => sum + item.shows.price, 0));
            
            // console.log(res.data);


        })
    },[])
  return (
    <>
    {isOpen && <Modal closeModal={closeModal}/>}
    <div className="container rounded bg-white mb-5 border">
         <div className="row">
                    <div className="col-md-6 border-right">
                         <div className="p-3 py-5"> <div className="d-flex justify-content-between align-items-center mb-3">
                             <h4 className="text-right">Profile Settings</h4> </div>
                              <div className="row mt-3 pt-3 px-3">
                                 <div className="col-md-6"><label className="labels">Name</label>
                                 <input type="text" className="form-control" placeholder=" Your First Name" value={firstname} readOnly/>
                                 </div> <div className="col-md-6"><label className="labels">Surname</label>
                                 <input type="text" className="form-control" value={lastname} placeholder="Your Surname" readOnly /></div> </div>
                                 
                                  <div className="row mt-3 p-3"> <div className="col-md-12"><label className="labels">Phone Number</label>
                                  <input type="text" className="form-control" placeholder="Your Mobile Number" value={mnumber} readOnly/></div>
                                  
                                  <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels">Username</label>
                                  <input type="text" className="form-control" placeholder="Your Username"value={username} readOnly/></div></div>
                                  
     
     
                                     <div className="col-md-12 pt-3"><label className="labels">Email ID</label>
                                        <input type="text" className="form-control" placeholder="Your Email Id" value={email} readOnly /></div> 
                                            
                                           </div>
                                                
                                                 <div className="row mt-3 pt-2"> 
                                                  
                                                   </div> <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={openModal}>Edit Your Profile Information</button>
                                                   
                                                   </div> 
                                                   </div>
                                                    </div>
                                                   
                                                    <div className="col-md-6"> <div className="p-3 py-5"> <div className="d-flex justify-content-between align-items-center experience"><span>You Spent</span>
                                                    <span className="border px-3 p-1 add-experience">&nbsp;LifeTime</span></div> 
                                                    <div className="col-md-12"><label className="labels">Total Amount</label>
                                                    <input type="text" className="form-control" placeholder="Total Amount" value={total}/></div>
                                                 
                                                    
                                                     </div> </div> </div>
</div>
</>
  )
}

export default Profile