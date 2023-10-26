import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AddTheaterModal from './Theater/AddTheaterModal';
import RotateLoader from "react-spinners/RotateLoader";

function Theatre() {

  const[loading,setLoading] = useState(false);

    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [totalSeats, setTotalSeats] = useState();

    const[theaterlist, setTheaterlist] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmit = () => {
        
    }
    const openModal = () => {
      setIsOpen(true);
      // console.log("You Select");
    };  
  const closeModal = () => setIsOpen(false);


    useEffect(() =>{
      setLoading(true);
        axios.get(`${process.env.REACT_APP_BASE_URL}/public/theaters`).then((res) =>{
            setTheaterlist(res.data);
            setLoading(false);
        })
    },[])

   
  return (

    <>
   {isOpen && <AddTheaterModal closeModal={closeModal}/>}

    <div className="addtheater p-4">
   


<div className="shows-field shadow bg-white">
<div className="p-4 d-flex justify-content-between">
        <div className="">
        <h3 className="">Theater List </h3>

        </div>
        <div className="">

      <button className="btn btn-primary" onClick={() => openModal()}>Add Theater</button>

        </div>
        </div> 
        <div className="container-fluid buttoncontainer d-flex justify-content-end">

  
          

        </div>
   
        <section className="intro py-2">
 <div className="bg-image h-100"> 
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
                        <th scope="col">Location</th>
                        <th scope="col">Theater Name</th>

                        
                      </tr>
                    </thead>
                    <tbody>
                    { 
      loading ?
      <tr> <th colspan="3">
          <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
      
         </th></tr>

    :

                     
                  theaterlist.map((d) => (

                    <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.location}</td>
                    <td>{d.name}</td>

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

export default Theatre