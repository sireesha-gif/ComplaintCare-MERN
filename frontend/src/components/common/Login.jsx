import axios from 'axios';
import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import image1 from '../../Images/Image1.png'
import Footer from './FooterC'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Login = () => {
   const navigate = useNavigate();
   const [user, setUser] = useState({
      email: "",
      password: ""
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8000/Login", user)
         .then((res) => {
            // alert("Successfully logged in");
            toast.success("Successfully logged in");
            localStorage.setItem("user", JSON.stringify(res.data));
            const isLoggedIn = JSON.parse(localStorage.getItem("user"));
            const { userType } = isLoggedIn
            switch (userType) {
               case "Admin":
                  navigate("/AdminHome")
                  break;
               case "Ordinary":
                  navigate("/HomePage")
                  break;
               case "Agent":
                  navigate("/AgentHome")
                  break;

               default:
                  navigate("/Login")
                  break;
            }
         })
         .catch((err) => {
            if (err.response && err.response.status === 401) {
               // alert("User doesn`t exists");
               toast.error("User doesn’t exist");
            }
            navigate("/Login");
         });
   };

   return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" className='p-3'>
         <Container fluid>
        <Navbar.Brand as={Link} to="/" className='mx-5'>
          <img
            src={image1}
            alt="Logo"
            width="40"
            height="25"
            className="d-inline-block align-text-bottom"
          />{' '}
          ComplaintCare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className='mx-5'>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="text-light">
              SignUp
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-light">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         <section className="vh-50 gradient-custom">
            <div className="container py-5 h-100">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card bg-dark text-white">
                        <div className="card-body p-5">
                           <div className="mb-md-2 mt-md-4 pb-4">
                              <h2 className="fw-bold mb-4 text-center">Login For Registering the Complaint</h2>
                              <p className="text-white-50 mb-4 text-center">Please enter your Credentials!</p>
                              <form onSubmit={handleSubmit}>
                                 <div className="form-outline form-white mb-4">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" required />
                                 </div>
                                 <div className="form-outline form-white mb-4">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" autoComplete="off" required />
                                 </div>

                                 <button className="btn btn-outline-light btn-lg px-5 w-100" type="submit">Login</button>
                              </form>
                           </div>
                           <div>
                              <p className="mb-0 text-center">Don't have an account? <Link to="/SignUp">SignUp</Link></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
      </>
   );
};

export default Login;
