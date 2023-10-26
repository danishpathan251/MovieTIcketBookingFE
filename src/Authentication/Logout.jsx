// import { Button } from 'bootstrap';
// import React from 'react'

// function Logout() {


//   return (
//     <>
//             {/* <div>logout</div> */}
//     <button onClick={unset}>Logout</button>
    
//     </>

//   )
// }

// export default logout

import React from 'react'

function Logout({ isOpen, onClose, onConfirm }) {

        const unset = () =>{
        localStorage.clear();
        window.location.reload();
    }
  return (

    <>
        {/* <button onClick={unset}>Logout</button> */}

        <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Confirm Logout</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="modal-card-body">
          <p>Are you sure you want to logout?</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={onClose}>Cancel</button>
          <button className="button is-danger" onClick={onConfirm}>Logout</button>
        </footer>
      </div>
    </div>
    </>
    
  )
}

export default Logout