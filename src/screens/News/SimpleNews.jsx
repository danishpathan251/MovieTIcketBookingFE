import React from 'react'

function SimpleNews() {

    const movieurl = 'caf6839f-4aa8-41e6-a022-63de44d995f7_godfather.jpeg';
  return (

    <div className="simplenews m-2 row shadow bg-white">
        {/* <div className="time-container bg-light">
            
                <div className="time-div border">   20223-05-20</div>
          </div> */}
    <div className="image-container col-sm-4">

        <img  className="image" src={`../images/${movieurl}`}  width="300px" height="350px"  alt={movieurl}/>
      {/* Danish */}
      
    </div>
    <div className="text-container col-sm-8">
        


    <div className="col-md-12"> <div className="p-3">
         <div className="d-flex justify-content-end experience">
                                                    <span className="border px-3 p-1 add-experience">&nbsp;20-05-2023</span></div></div></div>

        <div className="info-section">
          <div className="heading"><b>GodFather movie review and box office colleciton</b></div>
          <p className="p-5 content">God Father’ is undoubtedly one of the most awaited movies, which has released worldwide on October 5. 
             by megastar Chiranjeevi and superstar Salman Khan, 
             God Father is a stylish political action entertainer that has been mounted on a huge scale.
              There seems to be a massive demand across the Telugu states for opening day tickets. 
              The promos of 'God Father' has set sky-high expectations. Directed by Mohan Raja, the film also stars Nayanthara, Puri Jagannadh, Satyadev, Murali Sharma, Sunil, Brahmaji, Samuthirakani and Tanya Ravichandran. 
              Film trade analysts expect the Chiranjeevi film to set cash registers ringing. God Father is being funded by Chiranjeevi’s son and actor Ram Charan under their home banner Konidela Production Company in association with Super Good Films. 
              It has Thaman’s music, Nirav Shah’s cinematography and Marthand K. Venkatesh’s editing. Follow all the latest updates on God Father's release here:</p>


        </div>
    </div>
  </div>


  )
}

export default SimpleNews;