import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import Login from '../Authentication/Login';
import Logout from '../Authentication/Logout';
import logo1 from './logo2.png';



export default function Header() {

const [model, setmodel] = useState(false);


  return (
    // <div>Header</div>
<>
    <Navbar className='navbar' bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand to="/">
                
                <img src={logo1} alt="" width="150" height="50"/>
                Movie Ticket</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav ">
                <NavLink to="/BookingHistory">
                    <i className="fas fa-shopping-cart">
                       &nbsp; Home&nbsp; 
                    </i>

                </NavLink>

                

                <NavLink to="/BookingSeats">
                    <i className="fas fa-user">
                    &nbsp; History
                    </i>

                </NavLink>

            
            </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">

                <NavLink to="/Login">
                    <i className="fas fa-user ">
                    &nbsp; Log In
                    </i>
                </NavLink>
                {/* <button onclick={setmodel(true)}></button> */}

                <NavLink to="/Signup">
                    <i className="fas fa-user">
                    &nbsp; Sign in
                    </i>

                </NavLink>

                <NavLink>
                    <Button  onClick={() => {setmodel(true)}}>
                    <i className="fas fa-user">
                    &nbsp; Log Out
                    </i></Button>

                </NavLink>

                
                
             

            </Navbar.Collapse>
        </Container>

        
    </Navbar>

  {/* { model && <Login/> } */}

  {model && <Logout  closeModel={setmodel}/>}


    </>
    
  )
}
