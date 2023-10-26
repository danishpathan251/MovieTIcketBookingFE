import React from 'react'
import { Detector } from 'react-detect-offline';

const CheckConnection =({ closeModal,props})  => {
  return (
    <>
     

            <div className="modal-wrapper"></div>
            <div className="modal-container">
            <span className="close" onClick={closeModal}>&times; &nbsp;</span>
              <div className="modal-header pt-5 mx-3 border-bottom text-center"><h2>Forgot Your Password</h2></div>
              <div className="modal-body px-2 pt-5 fypmodel">
            
                                          
                                         
           <h1>Your Account has been Created</h1>
                                            
               
                                
          
          
          
            </div>
            </div>
          
          </>
  )
}

export default CheckConnection;