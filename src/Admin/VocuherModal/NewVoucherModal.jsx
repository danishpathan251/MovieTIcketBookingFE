import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


function NewVoucherModal({closeModal}) {

    const[code,setCode] = useState();
    const[discount,setDiscount] = useState();
    const[interestrate,setInterestrate] = useState();
    const[minamt,setMinamt] = useState();
    const[used,setUsed] = useState();
    const[image,setImage] = useState();

  const [isOpen, setIsOpen] = useState(false);
    const data = {code, discount, interestrate, minamt, used};
    const handleSubmit = () =>{
            axios.post(`${process.env.REACT_APP_BASE_URL}/admin/addVoucher`,data).then((res) =>{
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
    <div className="modal-header pt-5 mx-3 border-bottom"><h2>New Voucher Modal</h2></div>
    <div className="modal-body px-2">
    
    <div className="row mt-3 pt-3 px-3">
                                 <div className="col-md-6"><label className="labels">Code</label>
                                 <input type="text" className="form-control" placeholder=" Your Code" value={code} onChange={(e) => setCode(e.target.value)} />
                                 </div> <div className="col-md-6"><label className="labels">Discount Amount</label>
                                 <input type="text" className="form-control" value={discount} placeholder="Enter Amount" onChange={(e) => setDiscount(e.target.value)} /></div> </div>
                                 
                                  <div className="row mt-3 p-3"> <div className="col-md-12"><label className="labels">Interest</label>
                                  <input type="text" className="form-control" placeholder="Enter Interest" value={interestrate} onChange={(e) => setInterestrate(e.target.value)} /></div>
                                  
                                  <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels" >Min Amount</label>
                                  <input type="text" className="form-control" placeholder="Enter Minimum Amount"v alue={minamt} onChange={(e) => setMinamt(e.target.value)}/></div></div>
                                  
     
     
                                     <div className="col-md-12 pt-3"><label className="labels">Used</label>
                                        <input type="text" className="form-control" placeholder="Enter Yes/No" value={used} onChange={(e) => setUsed(e.target.value)}/></div> 
                                            
                                           </div>
                                                
                                                 <div className="row mt-3 pt-2"> 
                                                  
                                                   </div> <div className=" text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit} >Save Details</button>
                                                   
                                                   </div> 
                                                 
                                                 
    </div>
   



  </div>

   
   </>
  )
}

export default NewVoucherModal