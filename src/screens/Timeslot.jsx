import React,{useEffect, useState} from 'react';
// import available from './Available.js';
// import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import {Link} from 'react-router-dom';
import ShowList from '../Admin/ShowList.jsx';
import ShowsList from './ShowsList.jsx';
import DatePicker from "./DatePicker/Datepicker";
import "./css/timeslot.css";
import Showstime from '../Showstime.jsx';
import SeatsCheck from './SeatsCheck.jsx';




// console.log(available);

function Timeslot() {

    // const [record,setRecord] = useState([]);
  const[records, setRecords] = useState([]);
  const[date,setDate] = useState([]);
  const [theaterlist, setTheaterlist] = useState([]);
  const[title,setTitle] = useState();


   var {uid}= useParams();
  //  var {title}= useParams();

   console.log(uid);

  //  const today = new Date();
  //  const day = today.getDate();
  //  const month = today.getMonth() + 1;
  //  const year = today.getFullYear();


 
//    const selectedDay = (val) =>{
// };

const selectedDay = (val) =>{
  console.log("value of",val);
  // const dateStr = "Thu Apr 30 2020 05:30:00 GMT+0530 (India Standard Time)";
const dateObj = new Date(val);
const year = dateObj.getFullYear();
const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
const day = dateObj.getDate().toString().padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;
  setDate(formattedDate);
}





useEffect(() => {



  axios.get(`${process.env.REACT_APP_BASE_URL}/public/movielist/${uid}`).then((res) => {
    setRecords(res.data);
    setTheaterlist(res.data[0].theatreSet);
    setTitle(res.data[0].title);
    console.log("data", res.data[0].title);
  });
}, []);
 
    // console.log("data1", records.title);

  return (
    <>

<div className="movie-title container pt-5 px-5 py-5">
    <h2>Movie:{title}</h2>

</div>

<div className="container">
<DatePicker getSelectedDay={selectedDay}
                  endDate={100}
                  selectDate={new Date()}
                  labelFormat={"MMMM"}        
                  color={"#374e8c"}          
/>
</div>
 <div className="container-sm">{records.title}</div>
      {theaterlist.map((theater) => ( 
        <>
<div className="theatrecontainer border px-5">
  <div className="theater-title">
    <div className="theater-name">
    <div key={theater.id} className="header">
      <b>
          <p>{theater.name},{theater.location}</p></b>
        </div>
        
    </div>
    <div className="theater-time">
    <div className="timecontainer">
        {/* <SeatsCheck showdate={date} movieid={uid} theaterid={theater.id}/> */}
      <Showstime showdate={date} movieid={uid} theaterid={theater.id}  />

        </div>

</div>
  </div>
   
     
        </div>
      </>
      ))}



     </>
  )
}

export default Timeslot;


