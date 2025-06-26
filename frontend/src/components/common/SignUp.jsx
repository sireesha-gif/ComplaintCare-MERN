import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Container, Nav } from 'react-bootstrap';
import image1 from '../../Images/Image1.png'
import Footer from './FooterC';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const SignUp = () => {
   const [title, setTitle] = useState("Select User")
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      phone: "",
      userType: ""
   })
   const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value })
   }

   const handleTitle = (select) => {
      setTitle(select)
      setUser({ ...user, userType: select });
   }

   const handleSubmit = async (e) => {
      e.preventDefault()
      const updatedUser = { ...user, userType: title };
      axios.post("http://localhost:8000/SignUp", updatedUser)
         .then((res) => {
            // alert("record submitted")
            toast.success("Registration successful!");
            JSON.stringify(res.data.user)
         })
         .catch((err) => {
            console.log(err)
         })
      setUser({
         name: "",
         email: "",
         password: "",
         phone: "",
         userType: ""
      })
   }
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
         <section className="gradient-custom">
            <div className="container">
               <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                     <div className="card bg-dark text-white">
                        <div className="card-body p-5">
                           <div className="mb-md-1 mt-md-4 pb-4">
                              <h2 className="fw-bold mb-4 text-center">SignUp For Registering the Complaint</h2>
                              <p className="text-white-50 mb-4 text-center">Please enter your Details</p>
                              <form onSubmit={handleSubmit}>
                                 <div className="form-outline form-white mb-2">
                                    <label className="form-label" htmlFor="name">Full Name</label>
                                    <input type="name" name="name" value={user.name} onChange={handleChange} className="form-control form-control-lg" required />
                                 </div>
                                 <div className="form-outline form-white mb-2">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control form-control-lg" required />
                                 </div>
                                 <div className="form-outline form-white mb-2">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control form-control-lg" required />
                                 </div>
                                 <div className="form-outline form-white mb-2">
                                    <label className="form-label" htmlFor="mobile">Mobile No.</label>
                                    <input type="phone" name="phone" value={user.phone} onChange={handleChange} className="form-control form-control-lg" required />
                                 </div>
                                 <div className="form-outline form-white mb-2">
                                    <label className="form-label" htmlFor="mobile">Select User Type</label>
                                    <Dropdown>
                                       <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='w-100 py-2 my-1'>
                                          {title}
                                       </Dropdown.Toggle>

                                       <Dropdown.Menu className='w-100'>
                                          <Dropdown.Item onClick={() => handleTitle("Ordinary")}>Ordinary</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Admin")}>Admin</Dropdown.Item>
                                          <Dropdown.Item onClick={() => handleTitle("Agent")}>Agent</Dropdown.Item>
                                       </Dropdown.Menu>
                                    </Dropdown>
                                 </div>
                                 <button className="btn btn-outline-light btn-lg px-5 mt-3 w-100" type="submit">Register</button>
                              </form>
                           </div>
                           <div>
                              <p className="mb-0 text-center">Had an account? <Link to={"/Login"}>Login</Link></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Footer/>
      </>
   )
}

export default SignUp
