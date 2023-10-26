import React from 'react';
import "./notfound.css";
import img from './404img.png';

function Notfound() {
  return (
    <>
     <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center height-vh">
         <div className="col-lg-6 col-12">
            <div className="col-md-12">
               <img src={img} width="100%" />
            </div>
         </div>
         <div className="col-lg-6 col-12">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
               <h1 className="main-heading">404</h1>
               <h2>we couldn't find this page.</h2>
               <div className="text-center mt-4 mb-5">
                  <a href="/"><button id="nextBtn"  className="btn btn-default px-3 mr-2"><i className="fa fa-home"></i> Home</button></a>
                  {/* <button className="btn btn-success px-3 mr-2"><i className="fa fa-phone"></i> Contact</button>
                  <button className="btn btn-success px-3 mr-2"><i className="fa fa-info"></i> Report</button> */}
               </div>
            </div>
         </div>
      </div>
   </div>
    </>
  )
}

export default Notfound;