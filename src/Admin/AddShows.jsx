import React, { useEffect, useState } from 'react'
import AdminHeader from './AdminHeader';
import './css/add.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import mwtModal from './mwtmodel/mwtModal';
import AddShowsModal from './mwtmodel/AddShowsModal';
import RotateLoader from "react-spinners/RotateLoader";

function AddShows() {

  const [mid, setMid] = useState();
  const [name,setName] = useState();
  const[shows,setShows] = useState([]);
  const[area, setArea] = useState();
  const [theatre, setTheatre] = useState();
  const[loading,setLoading] = useState(false);


  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
     setIsOpen(true);
    //  console.log("You Select");
   };
 
   const closeModal = () => setIsOpen(false);

 

  useEffect(()=>{
    setLoading(true);
      axios.get(`${process.env.REACT_APP_BASE_URL}/public/shows`).then((response)=>{
         
        setShows(response.data);
          // console.log(response.data);
          setLoading(false);




      });

  },[]);

  console.log("showslist",shows);

  return (
    <>
    <div className="addshowsdiv h-100 p-2">
      {isOpen && <AddShowsModal closeModal={closeModal}/>}
        {/* <AdminHeader/> */}
<div className="shows-field shadow bg-white m-3">
  <h2 className="p-3">Shows List</h2><hr></hr>
        <div className="container-fluid buttoncontainer d-flex justify-content-end p-3">

        {/* <Button className="btn btn-default">Add Movie With Theater</Button> */}
          <Button className="btn btn-primary" onClick={openModal}>Add Shows</Button>
          

        </div>
   
        <section className="intro py-5">
 <div className="bg-image h-100">   {/*style="background-color: #f5f7fa;" */}
    <div className="mask d-flex align-items-center h-100">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="cards">
              <div className="card-body p-0">
               <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" >   {/* style="position: relative; height: 700px" */}
                  <table className="table mb-0">
                    <thead>    {/*style="background-color: #002d72;" */}
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Shows Time</th>
                        <th scope="col">Shows Date</th>
                        <th scope="col">Price</th>

                        <th scope="col">Theater Id</th>
                        <th scope="col">Total Seats</th>
                      </tr>
                    </thead>
                    <tbody>
                    { 
      loading ?
      <tr>
         <th colspan="6">
          <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
      
         </th></tr>

    : shows.map((d) => (

                    <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.showstime}</td>
                    <td>{d.showsdate}</td>
                    <td>{d.price}</td>
                    <td>{d.theaterId}</td>
                    <td>{d.totalseats}</td>
                    </tr>

                    ))}
                
                
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>

    </>
  )
}

export default AddShows;