import React from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import LogoF from '../assets/logo-f.png'

import Insta from '../assets/insta.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import YouTube from '../assets/youtube.png'

import './Footer.scss'


function Footer() {
    return (
        <footer className="py-5">
            <Container fluid="xxl">
                <Row className='mx-0'>
                   <Col sm="12" md="2" className='mb-5'>
                         <Navbar.Brand href="#home">
                                <img src={LogoF} alt="logo" />
                            </Navbar.Brand>
                   </Col>
                   <Col sm="12" md="2">
                        <h5 className='text-blue fw-semibold'>Services</h5>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Web Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">App Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Business Automation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Technology Consulting</Nav.Link>
                        </Nav.Item>
                   </Col>
                   <Col sm="12" md="2">
                        <h5 className="text-secondary fw-semibold">Solutions</h5>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Web Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">App Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Business Automation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Technology Consulting</Nav.Link>
                        </Nav.Item>
                   </Col>
                   <Col sm="12" className='col-md'>
                        <h5 className='text-yellow fw-semibold'>Resources</h5>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">News, Help Center</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Customer Blogs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Case Studies</Nav.Link>
                        </Nav.Item>
                       
                   </Col>
                   <Col sm="12" className='col-md'>
                        <h5 className='text-primary fw-semibold'>Careers</h5>
                       
                       
                   </Col>
                   <Col sm="12" className='col-md'>
                        <h5 className='text-secondary fw-semibold'>Get in Touch</h5>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Meet the Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="text-dark" href="#">Contact Us</Nav.Link>
                        </Nav.Item>
                       
                       
                   </Col>
                   <Col sm="12" className='col-md'>
                           <div className="d-flex socisl-media">
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
                   </Col>
                    {/* <Col>
                        <Navbar className="justify-content-between align-items-center d-xxl-flex flex-column flex-lg-row">
                            
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
                    </Col> */}
                    <Col sm={12} className="text-center pt-5">
                        <p>Copyright &copy; 2021 IT Cart - All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
