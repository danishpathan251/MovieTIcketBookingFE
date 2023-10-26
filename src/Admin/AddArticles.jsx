import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import NewArticles from './ArticlesModal/NewArticles';
import AddArticlesImage from './ArticlesModal/AddArticlesImage';
import RotateLoader from "react-spinners/RotateLoader";


function AddArticles() {

    const [articles,setArticles] = useState([]);
    const[loading,setLoading] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedResponseId, setSelectedResponseId] = useState(null);

      
    const openModal = () => {
        setIsOpen(true);
        console.log("You Select");
      };  

      const openModal2 = (responseId) => {
    setSelectedResponseId(responseId);

      setIsOpen2(true);
      console.log("You Select");
    };

  const closeModal = () => setIsOpen(false);

  const closeModal2 = () => {

    setIsOpen2(false);


  }

    useEffect(()=>{
      setLoading(true);

        axios.get(`${process.env.REACT_APP_BASE_URL}/admin/Articles`).then((response)=>{
            setArticles(response.data);
      setLoading(false);

            // console.log(response.data);
  
  
  
  
        });
  
    },[]);
  return (
   <>
   
   <div className="addshowsdiv h-100 p-2">
   {isOpen && <NewArticles closeModal={closeModal}/>}

{isOpen2 && <AddArticlesImage responseId={selectedResponseId} closeModal2={closeModal2}/>}
      {/* {isOpen && <mwtModal closeModal={closeModal}/>} */}
        {/* <AdminHeader/> */}
<div className="shows-field shadow bg-white m-3">
  <h2 className="p-3">News List</h2><hr></hr>
        <div className="container-fluid buttoncontainer d-flex justify-content-end p-3">

        {/* <Button className="btn btn-default">Add Movie With Theater</Button> */}
          <Button className="btn btn-primary"  onClick={() => openModal()}>Add Articles</Button>
          

        </div>
   
        <section className="intro py-2">
 <div className="bg-image h-100">   {/*style="background-color: #f5f7fa;" */}
    <div className="mask d-flex align-items-center h-100">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="cards">
              <div className="card-body p-0">
               <div className="table-responsive table-scroll" data-mdb-perfect-scrollbar="true" >   {/* style="position: relative; height: 700px" */}
                  <table className="table mb-0">
                    <thead>    {/*style="background-color: #002d72;" */}
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">News Title </th>
                        <th scope="col">News Content</th>
                        <th scope="col">Create Date</th>

                        <th scope="col">Image</th>
                        <th scope="col">Image Upload</th>
                      </tr>
                    </thead>
                    <tbody>
                    { 
      loading ?
      <tr>
         <th colspan="6">
          <div className="loader bg-white d-flex justify-content-center align-items-center">
      
      <RotateLoader
      color="#0083B0"
      loading={loading}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

</div>
      
         </th></tr>

    : articles.map((d) => (

                    <tr key={d.id}>
                    <td>{d.id}</td>
                    <td>{d.title}</td>
                    <td>{d.content}</td>
                    <td>{d.createdAt}</td>
                    <td>{d.image}</td>
                    <td><Button className="btn btn-primary"  onClick={() => openModal2(d.id)}>Upload Image</Button></td>
                    </tr>

                    ))}
                
                
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
</div>

   </>
  )
}

export default AddArticles;