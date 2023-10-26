import React, { useState } from 'react';
import logo from './logo2.png';
import AdminNavbar from './AdminNavbar';
// import { IoMenu } from 'react-icons/fa';

const authentication = localStorage.getItem('token');

const usertype = localStorage.getItem('usertype');

function Navbar() {

  console.log("usertype", usertype);

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log("You Select");
  };  

  const closeModal = () => setIsOpen(false);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              height="30"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`${
              isNavCollapsed ? 'collapse' : ''
            } navbar-collapse`}
            id="navbarButtonsExample"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/ticket">
                  Your Ticket
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/VoucherComponent">
                  Voucher
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/Articles">
                  Movies News
                </a>
              </li>
            </ul>
            {authentication ? (
              <div className="d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-link px-3 me-2"
                  onClick={logout}
                >
                  Log out
                </button>
                <a href="/Profile">
                  <button type="button" className="btn btn-link px-3 me-2">
                    Profile
                  </button>
                </a>

               { usertype == '"Admin"' ? (
                  <button type="button" className="btn btn-link px-3 me-2" onClick={openModal}>
               admin
                  </button>
               ):( <></>)}
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <a href="/Login">
                  <button type="button" className="btn btn-link px-3 me-2">
                    Login
                  </button>
                </a>
                <a href="/Signup">
                  <button type="button" className="btn btn-primary me-3">
                    Sign up for free
                  </button>
                </a>

               

              </div>
            )}
          </div>
        </div>
      </nav>
      {isOpen && <AdminNavbar closeModal={closeModal}/>}
    </>
  );
}

export default Navbar;
