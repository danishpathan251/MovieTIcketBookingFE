import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


function AddTheaterModal({closeModal}) {

   const[name,setName] = useState();
   const[location,setLocation] = useState();
   const[date,setDate] = useState();
    const[image,setImage] = useState();
    const[categories,setCategies] = useState();

  const [isOpen, setIsOpen] = useState(false);
    const data = {name,location};
    const handleSubmit = () =>{
            axios.post(`${process.env.REACT_APP_BASE_URL}/public/add/theatre`,data).then((res) =>{
                console.log(res.status);
                if(res.status == 200 || res.status == 201){
                    closeModal();
                    Swal.fire(
                        'ADD',
                        'Successfully Add',
                        'success'
                      )

                      setTimeout(() => {
                        window.location.reload();
                      }, 3000);

                }
            })
    }
    
  return (
   <>
   
   <div className="modal-wrapper"></div>
  <div className="modal-container">
  <span className="close"onClick={closeModal}>&times; &nbsp;</span>
    <div className="modal-header pt-5 mx-3 border-bottom"><h2>Enter New Articles</h2></div>
    <div className="modal-body px-2">
    
    <div className="row mt-3 pt-3 px-3">
                                 <div className="col-md-12"><label className="labels">Name</label>
                                 <input type="text" className="form-control" placeholder=" Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
                                </div> </div>
                                 
                                  <div className="row mt-3 p-3"> <div className="col-md-12"><label className="labels">Location</label>
                                  <input type="text" className="form-control" placeholder="Enter Location" value={location} onChange={(e) => setLocation(e.target.value)} /></div>

                                  
     
                                 
     
                                  
                                           </div>
                                                
                                                 <div className="row mt-3 pt-2"> 
                                                  
                                                   </div> <div className=" text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit} >Save Details</button>
                                                   
                                                   </div> 
                                                 
                                                 
    </div>
   



  </div>

   
   </>
  )
}

export default AddTheaterModal;