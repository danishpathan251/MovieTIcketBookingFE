import React, { useEffect, useState } from 'react';
import AdminHeader from './AdminHeader';
import './css/showslist.css';
import axios from 'axios';
function ShowList() {
  const[records, setRecord] = useState([]);

  useEffect(() =>{
      axios.get("http://localhost:8899/public/showlist").then(res =>{

        // console.log(res.data);
        setRecord(res.data);
        console.log(records);
      })
  },[])
  return (
    <> 
    
    <AdminHeader/>
    <h1 className="pt-5 px-5">List of Movie Shows</h1>
    
    <div className="container mt-5 border" id="showsList">
    <div className="text-end">
    
    </div>
    <table className="table  table-hover table-fixed">
        <thead>
        <tr>
           <th>Movie Id </th>
           <th>Name of Movie</th>
           <th>First Show</th>
           <th>Second Show</th>
           <th>Third Show</th>
           <th>Fourth Show</th>
           <th>Fifth Show</th>
           <th>Area Name</th>
           <th>Theatre Name</th>
         

    
        </tr>
        </thead>
        <tbody>
                {
                records.map((d,i)=>(
                
                <tr key={i}> 
                    <td>{d.mid}</td>
                    <td>{d.name}</td>
                    <td>{d.firstshow}</td>
                    <td>{d.secondshow}</td>
                    <td>{d.thirdshow}</td>
                    <td>{d.fourthshow}</td>
                    <td>{d.fifthshow}</td>
                    <td>{d.area}</td>
                    <td>{d.theatre}</td>
                    {/* <button  className="btn btn-primary" onClick={()=>selectUser(d.id)}>Update User</button> */}


                </tr>
                ))}

        </tbody>
      
    </table>
</div></>



  )
}

export default ShowList