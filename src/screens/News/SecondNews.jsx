import React from 'react'

function SecondNews() {

    const movieurl = '327d7743-6cad-4f5a-a8de-05ebc6cbb25b_rocky-aur-rani-kii-prem-kahaani-et00312549-1690269122.jpeg';
  return (
    <>
      <div className="bg-white shadow m-2">
    <div className="col-md-12"> <div className="p-3">
    <div className="d-flex justify-content-end experience">
                   <span className="border px-3 p-1 add-experience">20-05-2023</span>
                   </div></div>
           </div>
    <div className="simplenews secondnews mt-2 row">

    
    <div className="text-container col-sm-8">


      <div className="info-section px-5">
          <div className="heading"><b>GodFather movie review and box office colleciton</b></div>
          <p className="p-3">God Father’ is undoubtedly one of the most awaited movies, which has released worldwide on October 5. 
             by megastar Chiranjeevi and superstar Salman Khan, 
             God Father is a stylish political action entertainer that has been mounted on a huge scale.
              There seems to be a massive demand across the Telugu states for opening day tickets. 
              The promos of 'God Father' has set sky-high expectations. Directed by Mohan Raja, the film also stars Nayanthara, Puri Jagannadh, Satyadev, Murali Sharma, Sunil, Brahmaji, Samuthirakani and Tanya Ravichandran. 
              Film trade analysts expect the Chiranjeevi film to set cash registers ringing. God Father is being funded by Chiranjeevi’s son and actor Ram Charan under their home banner Konidela Production Company in association with Super Good Films. 
              It has Thaman’s music, Nirav Shah’s cinematography and Marthand K. Venkatesh’s editing. Follow all the latest updates on God Father's release here:</p>


        </div>
      
    </div>


    <div className="image-container col-sm-4 d-flex justify-content-center">
        
    <img className="image p-2" src={`../images/${movieurl}`} width="300px" height="350px" alt={movieurl}/>



   
    </div>
  </div>
    <div></div></div>
</>

  )
}

export default SecondNews;