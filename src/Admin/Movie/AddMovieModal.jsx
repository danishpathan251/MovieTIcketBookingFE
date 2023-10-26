import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


function AddMovieModal({closeModal}) {

   const[title,setTitle] = useState();
   const[description,setDescription] = useState();
    const[language,setLanguage] = useState();
    const[duration,setduration] = useState();
    const[releaseDate,setreleaseDate] = useState();
   

  const [isOpen, setIsOpen] = useState(false);
    const data = {title,description,language,releaseDate,duration};
    const handleSubmit = () =>{
            axios.post(`${process.env.REACT_APP_BASE_URL}/public/add/movies`,data).then((res) =>{
                console.log(res.data);
                if(res.status == 200){
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
    <div className="modal-header pt-5 mx-3 border-bottom"><h2>Add New Movies</h2></div>
    <div className="modal-body px-2">
    
    <div className="row mt-3 pt-3 px-3">
                                 <div className="col-md-12"><label className="labels">Movie Title</label>
                                 <input type="text" className="form-control" placeholder=" Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div> </div>
                                 
                                  <div className="row mt-3 p-3"> <div className="col-md-12"><label className="labels">Description</label>
                                  <input type="text" className="form-control" placeholder="Enter Content" value={description} onChange={(e) => setDescription(e.target.value)} /></div>
                                  
                                  <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels" >Release Date</label>
                                  <input type="text" className="form-control" placeholder="Enter Create Date" value={releaseDate} onChange={(e) => setreleaseDate(e.target.value)}/></div>
                                  
                                  <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels" >Language</label>
                                  <input type="text" className="form-control" placeholder="Enter Create Date" value={language} onChange={(e) => setLanguage(e.target.value)}/></div>
                                  
                            </div>
                                 </div>
                                           </div>
                                                
                                                 <div className="row mt-3 pt-2"> 
                                                  
                                                   </div> <div className=" text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit} >Save Details</button>
                                                   
                                                   </div> 
                                                 
                                                 
    </div>
   



  </div>

   
   </>
  )
}

export default AddMovieModal;