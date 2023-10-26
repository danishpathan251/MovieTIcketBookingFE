import React, { useEffect, useState } from 'react'
import FormComponent from './FormComponents';
import Offersend from '../Admin/Offersend';
import axios from 'axios';
import RotateLoader from "react-spinners/RotateLoader";


function VocherComponent() {

  const[loading,setLoading] = useState(false);

  const[vouchers,setVouchers] = useState([]);

  useEffect(()=>{
    setLoading(true);

      axios.get(`${process.env.REACT_APP_BASE_URL}/admin/Vouchers`).then((res)=>{
       
        const filteredData = res.data.filter(item => item.image !== null);
       
        console.log(filteredData);
        setVouchers(filteredData);
    setLoading(false);

      })

  },[])
  return (
    <>
    <div className="vocherComponent">
      <h2 className="text-center pt-5"> Discount Voucher</h2>
      <div className="discount-voucher">
      { 
      loading ?
      
  <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
    :vouchers.map((d) =>(
            <div className="voucher vocher1">
            <img src={`../codes/${d.image}`} alt="" width="100%" height="100%" />
    
              </div>


       ))}
      
        
      </div>

{/* <FormComponent/> */}
    </div>
    {/* <Offersend/> */}
    </>
  )
}

export default VocherComponent;