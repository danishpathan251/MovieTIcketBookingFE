import React,{useEffect, useState} from 'react';
import "./Modal.css";
import axios from 'axios';

function UpdateModal({ closeModal, responseId }) {

    const[id,setId] = useState();
    const [title, setTitle] = useState();
    const[description, setDescription] = useState();
    const [duration, setDuration] = useState();
    const[releaseDate, setReleaseDate] = useState();
    const[image, setimage] = useState();

    useEffect(()=>{
        axios.get(`http://localhost:8899/public/getMovie/${responseId}`).then(response =>{
            console.log("THe response id",response.data);
            setId(responseId);
            setTitle(response.data.title);
            setDescription(response.data.description);
            setDuration(response.data.duration);
            setReleaseDate(response.data.releaseDate);
            setimage(response.data.image)
            


        });
    },[])
    const handleSubmit = () =>{

        const data = {id,title,description,releaseDate,duration,image};
        axios.put(`${process.env.REACT_APP_BASE_URL}/public/updateMovie`,data).then(res =>{

        closeModal();   
            
        });
    
    };
  
  return (
    <>
    <div>
    <div className="modal-wrapper"></div>
  <div className="modal-container">
  <span className="close"onClick={closeModal}>&times; &nbsp;</span>
    <div className="modal-header p-3 mx-2 border-bottom"><h2>Update Movie Details</h2></div>
    <div className="modal-body ">
    
 
    <div className="container addshowcontainer p-3 border">
    <div className="form-group">
        <label>Movie Id</label>
        <input type="text" className="form-control" id="exampleInputEmail1" value={responseId} placeholder="Enter Movie Id" onChange={(e) => {setId(e.target.value )}}/>
    </div>
    <div className="form-group">
        <label>Movie title</label>
        <input type="text" className="form-control" id="exampleInputEmail1" value={title} placeholder="Enter Movie Name" onChange={(e) => {setTitle(e.target.value )}}/>
    </div>



    <div className="form-group">
        <label>Movie Description</label>
        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Description" value={description} onChange={(e) => {setDescription(e.target.value )}}/>
    </div>

    <div className="form-group">
        <label>Duration</label>
        <input type="time" className="form-control" id="exampleInputEmail1" value={duration}  placeholder="Enter Duration" onChange={(e) => {setDuration(e.target.value )}}/>
    </div>

    <div className="form-group">
        <label>Release Date</label>
        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Release Date" value={releaseDate} onChange={(e) => {setReleaseDate(e.target.value )}}/>
    </div>

    <div className="form-group">
        <label>Poster image</label>
        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Description" value={image} onChange={(e) => {setimage(e.target.value)}}/>
    </div>


 
    
   <div className="form-group pt-5 d-flex justify-content-end">
<button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</div>
    </div>

                                {/* <CardComponent/>
                                <UpiComponent/> */}
                                </div>
   



                                </div> </div>

  
  </>
  )
}

export default UpdateModal;