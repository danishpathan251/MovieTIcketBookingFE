import React,{useEffect, useState} from 'react';
import axios from 'axios';
import NewVoucherModal from './VocuherModal/NewVoucherModal';
import AddImageModal from './VocuherModal/AddImageModal';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';
import RotateLoader from "react-spinners/RotateLoader";


function AddVouchers() {
  const[loading,setLoading] = useState(false);

    const[voucher,setVouchers] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
  
    const [selectedResponseId, setSelectedResponseId] = useState(null);
  
    const openModal = () => {
        setIsOpen(true);
        console.log("You Select");
      };  

      const openModal2 = (responseId) => {
    setSelectedResponseId(responseId);

      setIsOpen2(true);
    //   console.log("You Select");
    };

  const closeModal = () => setIsOpen(false);

  const closeModal2 = () => {

    setIsOpen2(false);


  }



    useEffect(()=>{
      setLoading(true);

        axios.get(`${process.env.REACT_APP_BASE_URL}/admin/Vouchers`).then((response)=>{
            setVouchers(response.data);
            console.log(response.data);
            setLoading(false);

  
  
  
        });
  
    },[]);
  return (
    <>
      {isOpen && <NewVoucherModal closeModal={closeModal}/>}

      {isOpen2 && <AddImageModal responseId={selectedResponseId} closeModal2={closeModal2}/>}

    <div className="addshowsdiv p-2">
        <div className="bg-white">
    <div className="d-flex justify-content-between p-3">
    <h2 className="">Shows List</h2>
    {/* <Button className="btn btn-default">Add Movie With Theater</Button> */}
          <Button className="btn btn-primary" onClick={openModal}>Add Voucher</Button>
    </div>
    <section className="intro py-2">
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
                        <th scope="col">Code</th>
                        <th scope="col">Dicount Amount</th>
                        <th scope="col">Interest</th>

                        <th scope="col">Min Amount</th>
                        <th scope="col">Used</th>
                        <th scope="col">Image</th>
                        <th scope="col">Update</th>
                      </tr>
                    </thead>
                    <tbody>
                    { 
      loading ?
      <tr>
         <th colspan="12">
          <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
      
         </th></tr>

    :voucher.map((d) => (

                    <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.code}</td>
                    <td>{d.discount}</td>
                    <td>{d.interestrate}</td>
                    <td>{d.minamt}</td>
                    <td>{d.used}</td>
        
                         <td><button className="btn btn-primary" onClick={() => openModal2(d.id)}>ImageUpload</button></td>

                         {/* <td><img src={`../codes/${d.image}`} alt={d.title} className="card-img-top" width="10px" height="10px" /></td> */}
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

export default AddVouchers;