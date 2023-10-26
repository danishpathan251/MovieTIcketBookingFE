import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


function NewArticles({closeModal}) {

   const[title,setTitle] = useState();
   const[content,setContent] = useState();
   const[date,setDate] = useState();
    const[image,setImage] = useState();
    const[categories,setCategies] = useState();

  const [isOpen, setIsOpen] = useState(false);
    const data = {title,content,date,categories};
    const handleSubmit = () =>{
            axios.post(`${process.env.REACT_APP_BASE_URL}/admin/addArticles`,data).then((res) =>{
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
    <div className="modal-header pt-5 mx-3 border-bottom"><h2>Enter New Articles</h2></div>
    <div className="modal-body px-2">
    
    <div className="row mt-3 pt-3 px-3">
                                 <div className="col-md-12"><label className="labels">Title</label>
                                 <input type="text" className="form-control" placeholder=" Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                </div> </div>
                                 
                                  <div className="row mt-3 p-3"> <div className="col-md-12"><label className="labels">Content</label>
                                  <input type="text" className="form-control" placeholder="Enter Content" value={content} onChange={(e) => setContent(e.target.value)} /></div>
                                  
                                  <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels" >Create Date</label>
                                  <input type="text" className="form-control" placeholder="Enter Create Date" value={date} onChange={(e) => setDate(e.target.value)}/></div></div>
                                  
     
                                  <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels" >Category</label>
                                  {/* <input type="text" className="form-control" placeholder="Enter Category" value={categories} onChange={(e) => setCategies(e.target.value)}/> */}
                                  
                                    <select className="form-control" onChange={(e) => setCategies(e.target.value)}>
                                        <option value="Container1">Container 1</option>
                                        <option value="Container2">Container 2</option>
                                        <option value="Container3">Container 3</option>
                                    </select>
                                  
                                  </div></div>
                                  
     
                                  
                                           </div>
                                                
                                                 <div className="row mt-3 pt-2"> 
                                                  
                                                   </div> <div className=" text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit} >Save Details</button>
                                                   
                                                   </div> 
                                                 
                                                 
    </div>
   



  </div>

   
   </>
  )
}

export default NewArticles;