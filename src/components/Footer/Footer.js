import React from 'react'
import { Container,Row, Col, Navbar, Nav} from 'react-bootstrap';
import LogoF from '../assets/logo-f.png'

import Insta from '../assets/insta.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import YouTube from '../assets/youtube.png'

import './Footer.scss'


function Footer() {
    return (
        <footer className="py-5">  
            <Container>
                <Row>
                    <Col>
                        <Navbar className="justify-content-between align-items-center d-xxl-flex flex-column flex-lg-row">
                            <Navbar.Brand href="#home">
                                <img src={LogoF} alt="logo" />
                            </Navbar.Brand>
                            <Nav className="justify-content-center ms-auto d-md-flex flex-wrap" activeKey="/home">
                                <Nav.Item>
                                  <Nav.Link className="fw-semibold text-dark" href="#">Services</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link className="fw-semibold text-dark" href="#">Products</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link className="fw-semibold text-dark" href="#">Resources</Nav.Link>
                                </Nav.Item>
                               
                                <Nav.Item>
                                  <Nav.Link className="fw-semibold text-dark" href="#">Careers</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="fw-semibold text-dark">Get in touch</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <div className="d-flex socisl-media ms-0 ms-md-5">
                               <Nav.Link href="#">
                                   <img src={Insta} alt="insta" />  
                               </Nav.Link>
                               <Nav.Link href="#">
                                   <img src={Facebook} alt="insta" />  
                               </Nav.Link>
                               <Nav.Link href="#">
                                   <img src={Linkedin} alt="insta" />  
                               </Nav.Link>
                               <Nav.Link href="#">
                                   <img src={YouTube} alt="insta" />  
                               </Nav.Link>
                            </div>
                        </Navbar>
                    </Col>
                    <Col sm={12} className="text-center pt-5">
                        <p>Copyright &copy; 2021 IT Cart - All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
