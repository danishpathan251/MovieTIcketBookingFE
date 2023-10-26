import React, { useEffect, useState } from 'react'

import SimpleNews from './News/SimpleNews';
import SecondNews from './News/SecondNews';
import ThirdNews from './News/ThirdNews';
import axios from 'axios';
// import Footer from './Footer';
import RotateLoader from "react-spinners/RotateLoader";



function Articles() {

  const[loading,setLoading] = useState(false);

    const [articles, setArticles] = useState([]);

    useEffect(()=>{
      // console.log(process.env.REACT_APP_BASE_URL);
      setLoading(true);
        axios.get(`${process.env.REACT_APP_BASE_URL}/admin/Articles`).then((res) =>{
            const sortedData = res.data.sort((a, b) => new Date(b.time) - new Date(a.time));
                setArticles(sortedData);
                // console.log(sortedData);
                setLoading(false);
        });

    },[])
  return (
 
    <div className="articles pt-3 pb-1">
       <div className="shows-field shadow bg-white m-2">
  <h2 className="p-3 text-center">News</h2><hr></hr></div>

  { 
      loading ?
      
  <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      // size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
    :



    articles.map((d,i) =>(
            <div key={i}>

                {
                d.categories === 'Container1' ? (  <div className="simplenews m-2 row shadow bg-white">
                {/* <div className="time-container bg-light">
                    
                        <div className="time-div border">   20223-05-20</div>
                  </div> */}
            <div className="image-container col-sm-4">
        
                <img  className="image" src={`../Articles/${d.image}`}  width="300px" height="350px"  alt={d.image}/>
              {/* Danish */}
              
            </div>
            <div className="text-container col-sm-8">
                
        
        
            <div className="col-md-12"> <div className="p-3">
                 <div className="d-flex justify-content-end experience">
                                                            <span className="border px-3 p-1 add-experience">&nbsp;{d.createdAt}</span></div></div></div>
        
                <div className="info-section">
                  <div className="heading"><b>{d.title}</b></div>
                  <p className="p-5">{d.content}</p>
        
        
                </div>
            </div>
          </div>
          
          ): d.categories === 'Container2' ? (
          
            <div className="bg-white shadow m-2">
    <div className="col-md-12"> <div className="p-3">
    <div className="d-flex justify-content-end experience">
                   <span className="border px-3 p-1 add-experience">{d.createdAt}</span>
                   </div></div>
           </div>
    <div className="simplenews mt-2 row">

        {/* <div className="time-container bg-light">
            
                <div className="time-div border">   20223-05-20</div>
          </div> */}
    <div className="text-container col-sm-8">

      {/* Danish */}

      <div className="info-section px-5">
          <div className="heading"><b>{d.title}</b></div>
          <p className="p-3">{d.content}</p>


        </div>
      
    </div>


    <div className="image-container col-sm-4 d-flex justify-content-center">
        
    <img className="image p-2" src={`../Articles/${d.image}`} width="300px" height="350px" alt={d.image}/>



   
    </div>
  </div>
    <div></div></div>
          
          
          ):(
          
       
    <div className="h-100 p-2 bg-white shadow m-2">
    <div className="col-md-12"> <div className="p-3">
         <div className="d-flex justify-content-end experience">
                                                    <span className="border px-3 p-1 add-experience">{d.createdAt}</span>
                                                    </div></div></div>
         <div className="thirdnews pt-5">
        {/* <div className="time-container bg-light">
            
                <div className="time-div border">   20223-05-20</div>
          </div> */}
    <div className="d-flex justify-content-center image-container container h-50 w-100">

        <img  className="image" src={`../Articles/${d.image}`} width="700" height="300" alt={d.image}/>
      {/* Danish */}
      
    </div>
    <div className="text-container">
        



        <div className="info-section">
          <div className="heading pb-3 pt-5 text-center"><h2>{d.title}</h2></div>
          <p className="container">{d.content}</p>
        </div>
    </div>
  </div>
  </div>
          
          
          )
                
                }



            </div>

    )
    
    )
}
    
     {/* <SimpleNews/>
        <SecondNews/>
        <ThirdNews/> */}
    </div>
   
  )
}

export default Articles;