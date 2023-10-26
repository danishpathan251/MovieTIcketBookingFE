import React from 'react';
import { useState } from 'react';

function BookingSeats() {

    const [Row,setRow] = useState([

        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},

        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},

        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},

        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},

        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false},
        {empty:true, selected:false}
    
    ]);
    

  return (
    <div>
        <div className="container slot bordered">

            <div className="theatre-screen">
                
                    <h2> Screen</h2>
                
                 </div>

            
            <div className="theatre-slot">  

            


            </div>



        </div>


    </div>
  )
}

export default BookingSeats;