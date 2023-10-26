import React,{useEffect, useState} from 'react'
import axios from 'axios';
import "./showstime.css";
import { Button } from 'react-bootstrap';
import SeatsCheck from './screens/SeatsCheck';
// var movieid = 1
// var theatreid = 1
// const date = "2023-07-07";

function Showstime(showdate,movieid, theaterid) {

    // console.log("112",showdate.theaterid,showdate.movieid ,showdate.showdate);
  //  console.log("object",movieid);

    const[details, setDetails] = useState([]);
    const[showstime,setShowstime] = useState();
    const[showid, setShowid] = useState();
    const[count, setCount] = useState();
    const[checkdata, setCheckdata] = useState();
    
    const [childData, setChildData] = useState('');
    const [bookingCounts, setBookingCounts] = useState([]);

  const handleChildData = (data) => {
    setCheckdata(data);
    // console.log(data);
  };

    useEffect(()=>{
      // console.log("Danish");
      axios.get(`http://localhost:8899/public/${showdate.theaterid}/${showdate.movieid}/${showdate.showdate}`).then(res =>{
        setDetails(res.data);
        setShowid(details.id);
        
       
      
  
      });

     
  },[showdate]);

  useEffect(() => {
    const fetchBookingCounts = async () => {
      const bookingCountsPromises = details.map((result) =>
        axios.get(`http://localhost:8899/public/count/${result.id}`).then((response) => ({
          count: response.data,
          id: result.id,
        }))
      );
      const counts = await Promise.all(bookingCountsPromises);
      setBookingCounts(counts);
    };

    if (details.length > 0) {
      fetchBookingCounts();
    }
  }, [details]);

   const isFullyBooked = (showId) => {
  console.log("BookingCount", bookingCounts);

    const bookingCount = bookingCounts.find((count) => count.id === showId)?.count || 0;
    const show = details.find((result) => result.id === showId);
    console.log(bookingCount, "====", show.totalseats);
    return bookingCount >= show.totalseats;
  };

  
  return (
    //  <div className="theater-list">
    //   {
    //     details.map((result) =>(
    //       <>
          
    //       <a className="timehref" href={`/seatSelection/${result.id}`}>  
    //       <button className="theater-item btn btn-default mx-2 border">
            
    //         {result.showstime}
    //       </button></a>
    //       </>
      
    //     ))
    //   }
    //         {/* <a href="/seatSelection/1">
    //         <div className="theater-item">
    //           {details[0].showstime}
    //         </div></a> */}
    //     </div>

    <div className="theater-list">
      {

      details.map((result) => (
        <a className="timehref" href={`/seatSelection/${result.id}`} key={result.id}>
          <button
            className={`btn btn-default mb-3 border ${isFullyBooked(result.id) ? 'fully-booked' : 'theater-item'}`}
            disabled={isFullyBooked(result.id) ? 'disabled' : ''}
          >
            {result.showstime}
          </button>
          {/* {isFullyBooked(result.id) ? 'fully-booked' : 'theater-item'} */}
        </a>
      ))

  }
      
    </div>  
  )
}

export default Showstime