import React, { useEffect } from 'react';
import './Modal.css';

const name = localStorage.getItem("uname");


const Modal = ({ closeModal}) => {


  // document.body.style.overflowY = "hidden";
  //   return() =>{
  //     document.body.style.overflowY = "scroll;"
  //   };

//   useEffect(()=>{

//     axios.get(`http://localhost:8899/home/getuser/${name}`).then((res) =>{

//     setRecord(res.data);

//     setFirstname(res.data.firstname);
//     setLastname(res.data.lastname);
//     setEmail(res.data.email);
//     setUsername(res.data.username);
//     setMnumber(res.data.mnumber);
//     // console.log(res.data);

// })

//   },[])


  return (
    <>
      
      <aside className="profile-card w-50">
  <header>
   <div className="row">
    <div className="col-md-12">
       <h1>
           Your Ticket
          </h1></div>
    <div className="col-md-2 ">
    <span className="close border" onClick={closeModal}>&times; &nbsp;</span>
    </div>
   </div>
   

 
   



  </header>

  <div className="profile-bio border-bottom align-items-center">
{/* 
   <table align='center'>
    
      <tr>
      <th>Movie Name: </th>
      <td>Danish Khan</td>
      </tr>
      <tr>
      <th>Theater Name: </th>
      <td>Danish Khan</td>
      </tr>
      <tr>
      <th>Seat No: </th>
      <td>1,2,3,4</td>
      </tr>
      <tr>
      <th>Price: </th>
      <td>Danish Khan</td>
      </tr>
   </table> */}



  </div>
  <ul className="profile-social-links mt-5 pt-5">
    <h4>Your Ticket SuccessFully Booked</h4>
    <li>
      <a target="_blank" href="https://www.facebook.com/creativedonut">
        <i className="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://twitter.com/dropyourbass">
        <i className="fa fa-twitter"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://github.com/vipulsaxena">
        <i className="fa fa-github"></i>
      </a>
    </li>
    <li>
      <a target="_blank" href="https://www.behance.net/vipulsaxena">
       
        <i className="fa fa-behance"></i>
      </a>
    </li>
  </ul>
</aside>


</>
     
  );
};

export default Modal;