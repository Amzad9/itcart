import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import Icon from '../Icon/Icon'
import './Nav.scss';

import W from '../assets/w.png';
import A from '../assets/a.png';
import B from '../assets/b.png';
import T from '../assets/t.png';

import Logo from '../assets/logo-f.png'
const  Navigation = () => {
    return (
      <div>
         <Navbar id='navihation' sticky="top" bg="white" variant="light" expand="lg">
            <Container fluid="xxl">
              <Navbar.Brand>
                <Link to="/">
                   <img src={Logo} alt="logo" />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="ms-auto">
                  <NavDropdown title="Services" id="Services-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><img src={W} alt="" /> Web Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><img src={A} alt="" /> App Development</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><img src={B} alt="" /> Business Automation</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"><img src={T} alt="" /> Technology Consulting</NavDropdown.Item>
                  </NavDropdown>
                
                  <NavDropdown title="Solutions" id="Products-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">HRMS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">E-Services</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">MIS</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Enterprise Solutions</NavDropdown.Item>
                  </NavDropdown>

                   <NavDropdown title="Resources" id="Resources-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Blog</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Case Study</NavDropdown.Item>
                   </NavDropdown>
                   <Nav.Item>
                    <Link className="nav-link" to="careers">Careers</Link>
                   </Nav.Item>
                  
                   <NavDropdown title="Get in touch" id="get-in-touch">
                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">Our Team</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                   
                  </NavDropdown>
                   
                 </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
    );
  };

  export default Navigation;