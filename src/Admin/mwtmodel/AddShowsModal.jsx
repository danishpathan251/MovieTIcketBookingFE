import React, { useState } from 'react'

function AddShowsModal({closeModal}) {

    const[movieid,setMovieid] = useState();
    const[theaterid, setTheaterid] = useState();
    const[showsdate,setShowdate] = useState();
    const[showstime,setShowstime] = useState();
    const[price,setPrice] = useState();
    const [isOpen, setIsOpen] = useState(false);

    
    const handleSubmit = () => {

        const data = {movieid,theaterid, showsdate, showstime, price};
    }
  return (
    <>
   
    <div className="modal-wrapper"></div>
   <div className="modal-container">
   <span className="close"onClick={closeModal}>&times; &nbsp;</span>
     <div className="modal-header pt-5 mx-3 border-bottom"><h2>Add Shows Details</h2></div>
     <div className="modal-body px-2">
     
     <div className="row mt-3 pt-3 px-3">
                                  <div className="col-md-6"><label className="labels">Movie Id:</label>
                                  <input type="text" className="form-control" placeholder=" Your Movie Id" value={movieid} onChange={(e) => setMovieid(e.target.value)} />
                                  </div> <div className="col-md-6"><label className="labels">Theater Id</label>
                                  <input type="text" className="form-control" value={theaterid} placeholder="Enter Theater Id" onChange={(e) => setTheaterid(e.target.value)} /></div> </div>
                                  
                                   <div className="row mt-3 p-3"> <div className="col-md-12"><label className="labels">Shows Date</label>
                                   <input type="text" className="form-control" placeholder="Enter Date" value={showsdate} onChange={(e) => setShowdate(e.target.value)} /></div>
                                   
                                   <div className="row mt-3 pt-3"> <div className="col-md-12"><label className="labels" >Shows Time</label>
                                   <input type="text" className="form-control" placeholder="Enter Time" value={showstime} onChange={(e) => setShowstime(e.target.value)}/></div></div>
                                   
      
      
                                      <div className="col-md-12 pt-3"><label className="labels">Price</label>
                                         <input type="text" className="form-control" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)}/></div> 
                                             
                                            </div>
                                                 
                                                  <div className="row mt-3 pt-2"> 
                                                   
                                                    </div> <div className=" text-center"><button className="btn btn-primary profile-button" type="button" onClick={handleSubmit} >Save Details</button>
                                                    
                                                    </div> 
                                                  
                                                  
     </div>
    
 
 
 
   </div>
 
    
    </>
  )
}

export default AddShowsModal;