import React, {useState} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import Banner from '../banner/Banner';
// import SlideCard from '../Card/SlideCard';
// import {careerData} from '../Utility'
// import CommonTab from './CommonTab'
import { Link } from 'react-router-dom'
import Carrer from '../assets/career.png';
function Careers() {

    const [index, setIndex] = useState(0)
    const  handle = (e) => {
        setIndex(e)
    }
    return (
        <>
           <Banner 
           className="bg-career-bg"
            subtitle='Make Your Work Efficient With' 
            title ='Careers' 
            bodytext='Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text' />
           
            <section>
                
                <Container fluid="xxl" className="career-section bg-career-bg my-5 rounded-8 py-6">
                      <Row className='justify-content-center'>
                          <Row>
                              <Col>
                                  <img src={Carrer} alt="" className='d-block m-auto img-fluid' />
                              </Col>
                          </Row>
                       
                          <Col  xs={12} md={8} className='text-center px-5 mt-5'>
                            <h2>We’re growing and looking for talented people to help us change the world.</h2>
                            <p className='fw-500 text-dark  mt-5'>What’s the best thing about working at IT Cart? Easy! People. We’re curious, creative, and diverse. We're driven to find purpose in our work, and buoyed by the joy we get from supporting each other. We build awesome stuff that helps people, and we love doing so together.</p>
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
