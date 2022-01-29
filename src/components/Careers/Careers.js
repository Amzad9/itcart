import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Banner from '../banner/Banner';

import { Link } from 'react-router-dom'
import Carrer from '../assets/career.png';
function Careers() {

   
    return (
        <>
           <Banner 
           className="bg-career-bg"
            subtitle='Make Your Work Efficient With' 
            title ='Join Us on Our Thrilling Journey!' 
            bodytext='Become a valuable part of IT Cart family & fast-track your tech career and go through a trail-blazing experience of digital transformation of Businesses & Institutions in Real-time with Real Impact!' />
           
            <section>
                
                <Container fluid="xxl" className="career-section bg-career-bg my-5 rounded-8 py-6">
                      <Row className='justify-content-center'>
                          <Row>
                              <Col>
                                  <img src={Carrer} alt="" className='d-block m-auto img-fluid' />
                              </Col>
                          </Row>
                       
                          <Col  xs={12} md={8} className='text-center px-5 mt-5'>
                            <h2>Internships – College to Corporate</h2>
                            <p className='fw-500 text-dark  mt-3'>A golden opportunity for graduates to jump on the tech-wagon and get hands-on experience on real projects!</p>
                          </Col>
                          <Col  xs={12} md={8} className='text-center px-5 mt-3'>
                            <h2>Development – Coders & Problems Solvers</h2>
                            <p className='fw-500 text-dark  mt-3'>We call on the best developers around Globe to join IT Cart family on a journey to solve world problems through coding!  </p>
                          </Col>
                          <Col  xs={12} md={8} className='text-center px-5 mt-3'>
                            <h2>Sales & Marketing – People |Product | Promotion</h2>
                            <p className='fw-500 text-dark  mt-3'>Do you just love selling a technology solution?  </p>
                            <p className='fw-500 text-dark  mt-3'>Are you a marketing researcher keen on exploring IT Market?</p>
                            <p className='fw-500 text-dark  mt-3'>Then IT Cart might just be your working home! </p>
                          </Col>
                          <Col  xs={12} md={8} className='text-center px-5 mt-3'>
                            <h2>Management – Leadership Roles</h2>
                            <p className='fw-500 text-dark  mt-3'>“Vision, Initiative, and a seasoned Leader with loads and loads of top tier management experience!” </p>
       
                          </Col>
                          <Col  xs={12} md={10} className='mt-6'>
                            <h2 className="text-start mb-5">Current Job Openings</h2>
                            <h5 className='mb-4 fw-semibold'>Engineering</h5>
                            <Link to="/job" className="text-primary mb-1 fw-500 text-decoration-none">Senior Software Engineer Android</Link>
                            <p className='fw-500 text-dark'>Redwood City, CA</p>
                          </Col>
                          <Col  xs={12} md={10} className='mt-4'>
                            <Link className="text-primary mb-1 fw-500 text-decoration-none">Senior Software Engineer - iOS</Link>
                            <p className='fw-500 text-dark fw-500'>Redwood City, CA</p>
                          </Col>
                          <Col  xs={12} md={10} className='mt-4'>
                            <h5 className='mb-2 fw-semibold'>Product</h5>
                            <Link className="text-primary mb-1 fw-500 text-decoration-none">Senior Product Manager</Link>
                            <p className='fw-500 text-dark fw-500'>Redwood City, CA</p>
                          </Col>
                          <Col  xs={12} md={10} className='mt-4'>
                            <h5 className='mb-2 fw-semibold'>R&D</h5>
                            <Link className="text-primary mb-1 fw-500 text-decoration-none">Quality Engineer</Link>
                            <p className='fw-500 text-dark fw-500'>Redwood CIty, CA</p>
                          </Col>
                          <Col  xs={12} md={10} className='mt-4'>
                            <Link className="text-primary mb-1 fw-500 text-decoration-none">Public Sector - National Sales Director</Link>
                            <p className='fw-500 text-dark fw-500'>Redwood City, CA</p>
                          </Col>
                        </Row>
                        <Row>
                       
                        </Row>
                </Container>
               
            </section>
        </>
    )
}

export default Careers
