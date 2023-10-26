import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Showstime from '../Showstime';


function ShowsList() {

  const [time,settime] = useState([]);
  var movieid = 1
var theatreid = 1
const date = "2023-07-07";


  // useEffect(() => {
  //   console.log("The");
  //   axios.get(`http://localhost:8899/public/${theatreid}/${movieid}/${date}`).then(res =>{
  //     settime(res.date);
  //     console.log("THw result",res.data);
  //   })
  // },[])

  
  useEffect(()=>{
    console.log("Danish");
    axios.get(`${process.env.REACT_APP_BASE_URL}/public/${theatreid}/${movieid}/${date}`).then(res =>{
        settime(res.data.showstime);
        console.log("Shows ",res.data);
        console.time(time);
        // console.log("data",res.data);
        // console.log("the records",res.movie.data);


    })
    
},[])
  return (
    <>
    {/* <div>{time.map((t) => {
      
      <h1>Danish{t.showstime}</h1>
      
     })}</div> */}


     {/* {time.map((showid)=> (
 
  <h1>Danish{showid.showstime}</h1>
  
))
} */}
<div className="col-md-1">
 <Showstime />
 </div>
    </>
  )
}

export default ShowsList;