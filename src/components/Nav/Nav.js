import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

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

import Logo from '../assets/Website-Logo-ITCart/Website-Logo-27.svg'

const Navigation = () => {

const[show, setShow] = useState(true);

const hendle = () => {
  setShow(!show);
}

  return (
    <div>
      <Navbar id='navihation' sticky="top" bg="white" variant="light" expand="lg">
        <Container fluid="xxl">
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} className='' style={{width:'178px'}} alt="logo" />
            </Link>
          </Navbar.Brand>
          
          <button onClick={hendle} class="navbar-toggler" type="button" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <Navbar className={show ? '' : 'd-block'} id="basic-navbar-nav">
            <Nav className="ms-auto">
              <li className='nav-item dropdown' id="Services-nav-dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item services" to="ourservice"><img src={W} alt="" /> Web Development</Link>
                  <Link className="dropdown-item services" to="ourservice"><img src={A} alt="" /> App Development</Link>
                  <Link className="dropdown-item services" to="ourservice"><img src={B} alt="" /> Business Automation</Link>
                  <Link className="dropdown-item services" to="ourservice"><img src={T} alt="" /> Technology Consulting</Link>
                </ul>
              </li>

              <li className='nav-item dropdown' id="Products-nav-dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Solutions
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                <Link className="dropdown-item solu" to="cartsolution"><img src={Hrms} alt="" /> HRMS Automation</Link>
                <Link className="dropdown-item solu" to="cartsolution"><img src={Eservices} alt="" /> E-Services Automation</Link>
                <Link className="dropdown-item solu" to="cartsolution"><img src={Mis} alt="" /> MIS Solution</Link>
                <Link className="dropdown-item solu" to="cartsolution"><img src={Tnterp} alt="" /> Enterprise Solution</Link>
                </ul>
              </li>


              <li className='nav-item dropdown' id="Resources-nav-dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Resources
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                <Link className="dropdown-item resources" to="resources"> <img src={Customer} alt="" /> Blogs</Link>
                <Link className="dropdown-item resources" to="resources"> <img src={Case} alt="" /> Case Studies</Link>
                <Link className="dropdown-item resources" to="resources"> <img src={News} alt="" />News</Link>
                <Link className="dropdown-item resources" to="resources"> <img src={News} alt="" />Help Center</Link>
                </ul>
              </li>

             

             
              <Nav.Item>
                <Link className="nav-link" to="careers">Careers</Link>
              </Nav.Item>

             
              <li className='nav-item dropdown' id="get-in-touch">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Get in touch
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                <Link className="dropdown-item solu" to="ourteam"> <img src={Meet} alt="" /> Meet the Team</Link>
                <Link className="dropdown-item solu" to="contact"> <img src={Contact} alt="" /> Contact Us</Link>
                </ul>
              </li>

            </Nav>
          </Navbar>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;