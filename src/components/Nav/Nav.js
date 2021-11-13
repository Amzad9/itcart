import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import Icon from '../Icon/Icon'
import './Nav.scss';

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
                    <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Services</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Services</NavDropdown.Item>
                  </NavDropdown>
                
                  <NavDropdown title="Solutions" id="Products-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Solutions</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Solutions</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Solutions</NavDropdown.Item>
                  </NavDropdown>

                   <NavDropdown title="Resources" id="Resources-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Resources</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Resources</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Resources</NavDropdown.Item>
                   </NavDropdown>
                   <Nav.Item>
                    <Link className="nav-link" to="careers">Careers</Link>
                   </Nav.Item>
                   <Nav.Item>
                    <Nav.Link className="nav-link">Get in touch</Nav.Link>
                   </Nav.Item>
                   
                 </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
    );
  };

  export default Navigation;