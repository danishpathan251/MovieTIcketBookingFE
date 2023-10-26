import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UpdateModal from './Update_Modal/UpdateModal';
import MovieDetails from './MovieDetails';
import ImageUpload from './ImageUpload';
import MovieConnecttheater from './Movie/MovieConnecttheater';
import MovieImageModal from './Update_Modal/MovieImageModal';
import AddMovieModal from './Movie/AddMovieModal';
import RotateLoader from "react-spinners/RotateLoader";

function Movie() {

    const[details,setDetails] = useState([]);
    const [selectedResponseId, setSelectedResponseId] = useState(null);
 
    const[loading,setLoading] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    

    const openModal = (responseId) => {
        setSelectedResponseId(responseId);
       setIsOpen(true);
      //  console.log("You Select");
     };
   
     const closeModal = () => setIsOpen(false);

     const openModal1 = (responseId) => {
     setIsOpen1(true);
     console.log("You Select");
   };
 
   const closeModal1 = () => setIsOpen1(false);

     const openModal2 = (responseId) => {
      setSelectedResponseId(responseId);
        setIsOpen2(true);
        console.log("You Select");
      };

     const closeModal2 = () => {
      setIsOpen2(false);
    }

    const handleSubmit =() => {};

    useEffect(()=>{
      setLoading(true);

        axios.get(`${process.env.REACT_APP_BASE_URL}/public/getMovie`).then(res =>{
            // console.log("MOvie",res.data);
            setDetails(res.data);
      setLoading(false);

        })
    },[])
  return (

    <>
     <div className="addshowsdiv h-100 py-3">
    {isOpen1 && <AddMovieModal closeModal={closeModal1}/>}

    {isOpen && <UpdateModal responseId={selectedResponseId} closeModal={closeModal}/>}

    {isOpen2 && <MovieImageModal responseId={selectedResponseId} closeModal2={closeModal2}/>}

 <div className="history container-fluid">
    
    <div className="transaction-table">
      <div className="table-header bg-white">
      
       <div className="p-4 d-flex justify-content-between">
        <div className="">
        <h3 className="">Movies List </h3>

        </div>
        <div className="">

      <button className="btn btn-primary" onClick={() => openModal1()}>Add Movie </button>

        </div>
        </div> 
      <hr></hr>

          <table className="table ">
              <tbody>
              <tr>
                  <th>Movie Id</th>
                  <th>Movie Name</th>
                 <th>Description</th>   
                 <th>Realease Date</th>
                 <th>Language</th>
                 <th>Duration</th>
                 <th>Image URl</th>
                 <th>Update</th>

                 

              </tr>
              { 
      loading ?
      <tr> <th colspan="8">
          <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
      
         </th></tr>

    : details.map(response=> (
          <tr className="table-row" key={response.id}>
            <td>{response.id}</td>
            <td>{response.title}</td>
            <td>{response.description}</td>
             <td>{response.releaseDate}</td>
            <td>{response.language}</td>

            <td>{response.duration}</td>
            {/* <td>{response.image}</td> */}
            {/* <td><img src={response.image}/></td> */}
            <td><button className="btn btn-primary" onClick={() => openModal2(response.id)}>ImageUpload</button></td>


            <td><button className="btn btn-primary" onClick={() => openModal(response.id)}>Update</button></td>
            {/* Display more transaction details as needed */}
          </tr>
      
        ))}



          </tbody>
              
          </table>
      
        {/* Add more table header columns as needed */}
      </div>
  
    </div>
  </div>

  {/*  */}
    {/* <div className="container-fluid pt-5">
    <div className="container addshowcontainer w-50  m-5 border">
    <div className="form-group">
        <label>Movie Id</label>
        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Movie Id" onChange={(e) => {setId(e.target.value )}}/>
    </div>
    <div className="form-group">
        <label>Movie title</label>
        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Movie Name" onChange={(e) => {setName(e.target.value )}}/>
    </div>



    <div className="form-group">
        <label>Movie Description</label>
        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Description" onChange={(e) => {setDescription(e.target.value )}}/>
    </div>

    <div className="form-group">
        <label>Duration</label>
        <input type="time" className="form-control" id="exampleInputEmail1"  placeholder="Enter Duration" onChange={(e) => {setDuration(e.target.value )}}/>
    </div>

    <div className="form-group">
        <label>Release Date</label>
        <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Release Date" onChange={(e) => {setReleaseDate(e.target.value )}}/>
    </div>

 
    
   
<button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>

    </div></div>
     */}
    <MovieDetails/>
    {/* <UpdateModal/> */}
    {/* <ImageUpload/> */}
    {/* <div>Danish</div> */}
    </div>
    </>
  )
}

export default Movie;