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
            
                                          
                                         
                          
              <Detector
            render={({online}) =>(
                online ? props.children:
                <div style={{paddingTop:'10px'}}>
                    <h1 style={{marginBottom:'5px'}}>No Connection</h1>
                    <h4 style={{marginBottom:0}}>Please Check Your Internet Connection</h4>
                </div>

                
            )}/>                    
          
                                            
               
                                
          
          
          
            </div>
            </div>
          
          </>
  )
}

export default CheckConnection;