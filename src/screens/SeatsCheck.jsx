// import React, { useEffect } from 'react';
// import axios from 'axios';
// import Showstime from '../Showstime';

// function SeatsCheck({ showid,sendDataToParent,showdate, movieid, theaterid}) {

//     useEffect(()=>{
//         axios.get(`http://localhost:8899/public/count/${showid}`).then(res=>{
//         if(res.data === 2){
//             sendDataToParent(true);
//         }
//         else{
//             sendDataToParent(false);
            
//         }
//     })

// },[showid]);
// console.log("1234",showdate,movieid,theaterid);


// return(
//     <Showstime showdate={showdate} movieid={movieid} theaterid={theaterid} />
        
// )
// }
// export default SeatsCheck;