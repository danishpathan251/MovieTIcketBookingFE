import React,{useEffect, useState} from 'react';
import './extra.css';
import Showstime from './Showstime';
import axios from 'axios';
import Modal from './screens/Modal/Modal';
import MovieList from './Extra/MovieList';
// import Button from 'react-bootstrap';
function Extra() {

  const[details, setDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const [tickets, setTickets] = useState([]);
  const [showData, setShowData] = useState([]);
  const [userid, setUserid] = useState("14");
 

  const[booking,setbooking] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };



  const closeModal = () => setIsOpen(false);

  const handleSubmit = (id) =>{
    axios.delete(`http://localhost:8899/home/delete/${id}`).then((response) =>{
  
    alert(response.data);
    })
  }
// var movieid = 3
// var theatreid = 1
// const date = "2023-05-25";
  useEffect(()=>{

    

    // axios.get(`http://localhost:8899/public/${theatreid}/${movieid}/${date}`).then((res) =>{
    //     // setRecord(res.data);
    //     console.log(res.data);
    //     console.log("data",res.data);
    //     // console.log("the records",res.movie.data);


    // })
    axios.get(`http://localhost:8899/home/users/${userid}`).then(res => {

      console.log("The ticket List is", res.data);
      setTickets(res.data);

      // const showIds = [...new Set(res.data.map(item => item.shows.id))];
      // setShowData(showIds);


  })

  // console.log("SHowidsud",tickets);

    
},[])



const getBookingDetail = () => {
  axios.get(`http://localhost:8899/home/users/${userid}`).then((res) =>{
    console.log("THe Booking Response is ", res.data[0].shows)
    console.log("THe Booking Response is Movie ID ", res.data[0].shows.moviesId)

      



  })
}

    
  return (
<>

<div className="container border wrapitem1">

  <button onClick={getBookingDetail} className="btn btn-primary h-25">Get Booking Details</button>
</div>



<div className="wrapbc">
<div className="wrapc">
    <div className="wrapitem1">1</div>
    <div className="wrapitem2">2</div>
    <div className="wrapitem3">3</div>
    <div className="wrapitem4">4</div>
    <div className="wrapitem5">5</div>
    {/* <div className="wrapitem6">6</div> */}

</div>

</div>

<MovieList/>
    <button className="btn btn-primary"  onClick={openModal}>Open Modal</button>
    {isOpen && <Modal closeModal={closeModal}/>}
  
    <div className="movie-list">

</div>
      {/* </div> */}
      <div className="container-fluid">
           <div className="container-card bordered">

{tickets.map((result) => (

<div className="card">
{/* <img className="card-img-top" src={spiderman} alt={"spiderman"} /> */}
<div className="card-body">
<h5 className="card-title">{result.shows.id}</h5>
<p className="card-text">{result.theatreId}d</p>
<p className="card-text">{result.shows.showstime}</p>
{/* <a href="#" className="btn btn-danger"> Cancel TIcket</a> */}
<button className="btn btn-danger" onClick={() => handleSubmit(result.id)}>Ticket Cancel</button>
</div>
</div>
))}
              
        
            </div>
      </div>
</>

  )
}

export default Extra;