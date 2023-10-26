import React from 'react'
// import './footer.css';

function Footer() {
  return (
   <>
   <footer className="footer border-top text-dark py-4">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <h5>About Us</h5>
        <p>Movie Ticket Booking is a user-friendly website that provides a convenient platform for movie enthusiasts to book tickets online. With a vast selection of movies from various genres,
             users can browse through the latest releases, upcoming films, and showtimes. </p>
      </div>
      <div className="col-md-6">
        <h5>Contact Us</h5>
        <ul className="list-unstyled">
          <li>Email: info@mtb.com</li>
          <li>Phone: +91 123 456 7890</li>
          <li>Address: 111 Movie Street, Vadodara, Gujarat</li>
		  <li><div className="login100-form-social flex-c-m pt-3">
						<a href="#" className="login100-form-social-item flex-c-m bg1 px-2 m-r-5">
							<i className="fa fa-facebook-f" aria-hidden="true"></i>
						</a>

						<a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
							<i className="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</div></li>
        </ul>
      </div>
    </div>
    <div className="row mt-3 border-top">
      <div className="col-md-12 text-center">
        <p>&copy; 2023 Movie Ticket Booking. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>

   
   </>
  )
}

export default Footer;
