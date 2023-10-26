import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import { useEffect, useState } from 'react';

function MovieConnecttheater() {

    const[theaterids, setTheaterids] = useState([]);
    const [moviesids, setMoviesids] = useState([]);

    const[movieid, setMovieid] = useState(); 
    const[theaterid, setTheaterid] = useState();

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_BASE_URL}/public/theaters`).then((res) =>{


            const arrayOfIds = res.data.map(obj => obj.id);
            setTheaterids(res.data);

            console.log("Array of id1 is", arrayOfIds);
            
        })

        axios.get(`${process.env.REACT_APP_BASE_URL}/public/movies`).then((res) =>{


            const arrayOfIds2 = res.data.map(obj => obj.id);
            // setMoviesids(arrayOfIds2);
            setMoviesids(res.data);

        console.log("Array of id2 is", arrayOfIds2);


            
        })

    },[]);

    const handlesubmit = () =>{
        // console.log("YOur");

        axios.put(`http://localhost:8899/public/${movieid}/with/${theaterid}`).then((res) =>{
                if(res.status == 200){
                    console.log("SuccessFully Add");
                    Swal.fire(
                        'ADD',
                        'Successfully Add',
                        'success'
                      )

                      setTimeout(() => {
                        window.location.reload();
                      }, 3000);
                }
                else{
                    console.log("Error! Not Add");
                }
        });
    }
  return (
    <>
    <div className="container mb-5 bg-white py-5">
    <div className="text-center h3 p-3">Movie Connect Theater</div>
    <div className="container w-75">
    <div className="d-flex justify-content-center text-center">
        <div className="w-50 h3 p-3">Theaters</div>
        <div className="w-50 h3 p-3">Movie</div>
    </div>
    </div>
  
    <div className="container h-100 w-75 d-flex justify-content-center">
<select className="form-control w-50" onChange={(e) => setTheaterid(e.target.value)}>
        <option>Select Any One</option>

    {theaterids.map((d)=>(
            <option key={d.id} value={d.id}>
                
                {d.name}</option>
        ))}
    </select>
   
    <select className="form-control w-50" onChange={(e) => setMovieid(e.target.value)}>
    <option>Select Any One</option>

  {moviesids.map((d) => (
    <option key={d.id} value={d.id}>
      {d.title}
    </option>
  ))}
</select>



    </div>
    <div className="d-flex justify-content-center">
<button className="btn btn-primary mt-5" onClick={handlesubmit}>Set Movie With Theaters</button>
</div>
</div>
    </>
  )
}

export default MovieConnecttheater;