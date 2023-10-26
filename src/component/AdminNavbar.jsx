import React from 'react'
function AdminNavbar({closeModal}) {
  return (
    <>
    <div className="modal-wrapper">
  <div className="modal-container h-50">
  <span className="close" onClick={closeModal}>&times; &nbsp;</span>
    <div className="modal-header pt-5 mx-3 border-bottom text-center h2">Admin Navbar</div>
    <div className="modal-body px-2">
    
    <div className="px-5">

        <a href="/addArticles"><button className="btn btn-primary adminbtn m-2">Add News</button></a>

        <a href="/addmovie"><button className="btn btn-primary adminbtn m-2">Add Movie</button></a>
        <a href="/addshows"><button className="btn btn-primary adminbtn m-2">Add Shows</button></a>

        <a href="/addtheatre"><button className="btn btn-primary adminbtn m-2">Add Theater</button></a>
        <a href="/addVoucher"><button className="btn btn-primary adminbtn m-2">Add Voucher</button></a>

                               
                                                 
    </div>
    </div>
   



  </div>
  </div>
   
   
    
    </>

  )
}

export default AdminNavbar;