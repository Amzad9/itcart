import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Icon from '../Icon/Icon'
import './Nav.scss';

import W from '../assets/w.png';
import A from '../assets/a.png';
import B from '../assets/b.png';
import T from '../assets/t.png';
import Hrms from '../assets/hrms.png';
import Eservices from '../assets/e-services.png';
import Mis from '../assets/mis.png';
import Tnterp from '../assets/enterp.png';

import News from '../assets/news.png';
import Customer from '../assets/customer.png';
import Case from '../assets/case.png';

import Meet from '../assets/meet.png';
import Contact from '../assets/contact.png';

import Logo from '../assets/logo-f.png'

const Navigation = () => {
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
                <Link className="dropdown-item services" to="ourservice"><img src={W} alt="" /> Web Development</Link>
                <Link className="dropdown-item services" to="ourservice"><img src={A} alt="" /> App Development</Link>
                <Link className="dropdown-item services" to="ourservice"><img src={B} alt="" /> Business Automation</Link>
                <Link className="dropdown-item services" to="ourservice"><img src={T} alt="" /> Technology Consulting</Link>
              </NavDropdown>

              <NavDropdown title="Solutions" id="Products-nav-dropdown">
                <Link className="dropdown-item solu" to="cartsolution"><img src={Hrms} alt="" /> HRMS Automation</Link>
                <Link className="dropdown-item solu" to="cartsolution"><img src={Eservices} alt="" /> E-Services Automation</Link>
                <Link className="dropdown-item solu" to="cartsolution"><img src={Mis} alt="" /> MIS Solution</Link>
                <Link className="dropdown-item solu" to="cartsolution"><img src={Tnterp} alt="" /> Enterprise Solution</Link>
              </NavDropdown>

              <NavDropdown title="Resources" id="Resources-nav-dropdown">
              <Link className="dropdown-item resources" to="resources"> <img src={Customer} alt="" /> Blogs</Link>
                <Link className="dropdown-item resources" to="resources"> <img src={Case} alt="" /> Case Studies</Link>
                <Link className="dropdown-item resources" to="resources"> <img src={News} alt="" />News</Link>
                <Link className="dropdown-item resources" to="resources"> <img src={News} alt="" />Help Center</Link>
              </NavDropdown>
              <Nav.Item>
                <Link className="nav-link" to="careers">Careers</Link>
              </Nav.Item>

              <NavDropdown title="Get in touch" id="get-in-touch">
                <Link className="dropdown-item solu" to="ourteam"> <img src={Meet} alt="" /> Meet the Team</Link>
                <Link className="dropdown-item solu" to="contact"> <img src={Contact} alt="" /> Contact Us</Link>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;