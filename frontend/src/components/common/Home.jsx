import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import Image1 from '../../Images/Image1.png'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from './FooterC'
import image1 from '../../Images/Image1.png'

const Home = () => {
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
         <Container className='home-container'>
            <div className="left-side">
               <img src={Image1} alt="" />
            </div>
            <div className="right-side">
               <p>
                  <span className='f-letter'>Empower Your Team,</span><br />
                  <span className='s-letter'> Exceed Customer Expectations: Discover our</span> <br />
                  <span className='t-letter'>Complaint Management Solution</span><br />
                  <Link to={'/Login'}><Button className='mt-3 register'>Register your Compliant</Button></Link>
               </p>
            </div>
         </Container>
         <Footer/>
      </>
   )
}

export default Home
