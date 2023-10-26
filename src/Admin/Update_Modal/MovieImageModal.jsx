import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Swal from 'sweetalert2';


function MovieImageModal({closeModal2, responseId}) {


    
    console.log(responseId);
    const[image,setImage] = useState();
    const [selectedImage, setSelectedImage] = useState(null);



    const handleFileChange = (e) => {
        setSelectedImage(e.target.files[0]);
      };

      const handleSubmit = () =>{

        const formData = new FormData();
        formData.append('image', selectedImage);
  
        axios.put(`${process.env.REACT_APP_BASE_URL}/admin/updateMovieImage/${responseId}`,formData).then((res) =>{
            console.log("Upload Image", res.status);
            
            Swal.fire(
                'Updated',
                `${res.data}`,
                'success'
              )
  
        })
}
  return (
    // <div>MovieImageModal</div>

    <div className="modal-wrapper">
  <div className="modal-container h-50">
  <span className="close"onClick={closeModal2}>&times; &nbsp;</span>
    <div className="modal-header pt-5 mx-3 border-bottom"><h2>Code Image Upload</h2></div>
    <div className="modal-body px-2">
    
    <div className="row mt-3 pt-3 px-3">
                                 <div className="col-md-6"><label className="labels">Code</label>
                                 {/* <input type="file" className="form-control" placeholder=" Your Code" value={code} onChange={(e) => setCode(e.target.value)} /> */}
                                 <input type="file" accept="image/*" onChange={handleFileChange} className="form-control" placeholder=" Your Code" />
                                 </div> 

                                 <div className="p-3"><label className="labels">Code {responseId}</label></div>
     
                 
                                            
                                           </div>
                                                
                                                 <div className="row mt-3 pt-2"> 
                                                  
                                                   </div> <div className=" text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit} >Save Image</button>
                                                   
                                                   </div> 
                                                 
                                                 
    </div>
   



  </div>
  </div>

  )
}

export default MovieImageModal