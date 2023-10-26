import React,{useEffect, useState} from 'react';
import AdminHeader from './AdminHeader';
import './css/showslist.css';
import axios from 'axios';

function UserDetails() {

    const [record,setRecord] = useState([]);

    const responsedata = () =>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/home/Userinfo`).then((res) =>{
            setRecord(res.data);

        })


    // console.log(res.data);

    }

    useEffect(() => {
        responsedata();
    },[

    ])

  return (
   <>
        <AdminHeader/>
   <h1 className="pt-5 px-5">List of Users</h1>
    
   <div className="container mt-5 border" id="showsList">
   <div className="text-end">
   
   </div>
   <table className="table  table-hover table-fixed">
       <thead>
       <tr>
          <th>sr </th>
          <th>Name of Movie</th>
          <th>Realising Date</th>
          <th>till date</th>
          <th>Run Time(mins)</th>
          <th>Genres</th>

   
       </tr>
       </thead>
       <tbody>
               {
               record.map((d,i)=>(
               
               <tr key={i}> 
                   <td>{d.id}</td>
                   <td>{d.firstname}</td>
                   <td>{d.lastname}</td>
                   <td>{d.email}</td>
                   <td>{d.username}</td>
                   <td>{d.password}</td>
                   {/* <button  className="btn btn-primary" onClick={()=>selectUser(d.id)}>Update User</button> */}


               </tr>
               ))}

       
       <tr>
           <td>1</td>
           <td>Danish Khan</td>
           <td>Danish Khan</td>
           <td>Danish Khan</td>
           <td>Danish Khan</td>
           <td>Danish Khan</td>
       </tr>
       </tbody>
   </table>
</div></>
  )
}

export default UserDetails