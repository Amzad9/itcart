import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
import Icon from '../Icon/Icon'
import './Nav.scss';

import W from '../assets/w.png';
import A from '../assets/a.png';
import B from '../assets/b.png';
import T from '../assets/t.png';
 
import News from '../assets/news.png';
import Customer from '../assets/customer.png';
import Case from '../assets/case.png';

import Meet from '../assets/meet.png';
import Contact from '../assets/contact.png';

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
                    <NavDropdown.Item className="solu" href="#action/3.1"><img src={W} alt="" /> HRMS Automation</NavDropdown.Item>
                    <NavDropdown.Item className="solu" href="#action/3.1"><img src={A} alt="" /> E-Services Automation</NavDropdown.Item>
                    <NavDropdown.Item className="solu" href="#action/3.2"><img src={B} alt="" /> MIS Solution</NavDropdown.Item>
                    <NavDropdown.Item className="solu" href="#action/3.3"><img src={T} alt="" /> Enterprise Solution</NavDropdown.Item>
                  </NavDropdown>

                   <NavDropdown title="Resources" id="Resources-nav-dropdown">
                    <NavDropdown.Item className="resources" href="#action/3.1"><img src={News} alt="" /> News, Help Center</NavDropdown.Item>
                    <NavDropdown.Item className="resources" href="#action/3.2"><img src={Customer} alt="" /> Customer Blogs</NavDropdown.Item>
                    <NavDropdown.Item className="resources" href="#action/3.3"><img src={Case} alt="" /> Case Studies</NavDropdown.Item>
                   </NavDropdown>
                   <Nav.Item>
                    <Link className="nav-link" to="careers">Careers</Link>
                   </Nav.Item>
                  
                   <NavDropdown title="Get in touch" id="get-in-touch">
                    <NavDropdown.Item className="meet-item" href="#action/3.1"><img src={Meet} alt="" /> Meet the Team</NavDropdown.Item>
                    <NavDropdown.Item className="meet-item" href="#action/3.2"><img src={Contact} alt="" /> Contact Us</NavDropdown.Item>
                   
                  </NavDropdown>
                   
                 </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
      </div>
    );
  };

  export default Navigation;