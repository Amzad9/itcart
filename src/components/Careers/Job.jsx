import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import Banner from '../banner/Banner';
import NewsLetter from '../NewsLetter/NewsLetter'
import './Attachment.scss'
function Job() {
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
                        
                          <Col  xs={12} md={10}>
                            <h2 className="text-start mb-2">Senior Software Engineer Android</h2>
                            <p className="mb-0">at Pivot <span className="text-primary">(View all jobs)</span></p>
                            <span>Redwood City, CA</span>
                            <h5 className='mt-4 mb-3 fw-semibold'>JOB DESCRIPTION</h5>
                            <h6 className="text-primary mb-3 fw-500">Summary/Objective</h6>
                            <p className='fw-500 text-dark'>The Senior Android Engineer is responsible for leading and growing the Android team</p>
                          
                            <h6 className="text-primary mb-3 fw-500">Essential Functions</h6>
                            <p className='text-dark'>Reasonable accommodations may be made to enable individuals with disabilities to perform the essential functions.</p>
                           
                            <ul>
                                <li>Work closely with product, hardware and design teams to build innovative products for the Android platform</li>
                                <li>Implement custom native user interfaces using the latest native Java Application programming techniques</li>
                                <li>Implement a real-time, scalable coaching and peer-to-peer support system</li>
                                <li>Seamlessly integrate our Bluetooth LE hardware device into the app  experience</li>
                                <li>Participate in design and code reviews</li>
                                <li>Identify and communicate Android best practices</li>
                            </ul>
                            <h6 className="text-primary mb-3 fw-500">Competencies</h6>
                            <ol type="1">
                                <li>Business Acumen.</li>
                                <li>Communication.</li>
                                <li>Manage complexity.</li>
                                <li>Decision making.</li>
                                <li>Strong Aptitude.</li>
                                <li>Attention to details.</li>
                            </ol>

                            <h6 className="text-primary mb-4 fw-500">Supervisory Responsibility</h6>
                            <p>None</p>
                            <h6 className="text-primary mb-3 fw-500">Work Environment</h6>
                            <p>This job operates in a professional office environment. This role routinely uses standard office equipment such as laptop computers and smartphones.</p>
                            <h6 className="text-primary mb-4 fw-500">Physical Demands</h6>
                            <p>The physical demands described here are representative of those that must be met by an employee to successfully perform the essential functions of this job.</p>
                            <p>While performing the duties of this job, the employee is occasionally required to stand; walk; sit; use hands to finger, handle, or feel objects, tools, or controls; reach with hands and arms; climb stairs; balance; stoop, kneel, crouch or crawl; talk or hear; and taste or smell. The employee must occasionally lift or move up to 20 pounds. Specific vision abilities required by the job include close vision, distance vision, color vision, peripheral vision, depth perception and the ability to adjust focus. </p>
                            <h6 className="text-primary mb-4 fw-500">AAP/EEO Statement</h6>
                            <p>It is the policy of Carrot Inc. to provide equal employment opportunity (EEO) to all persons regardless of age, color, national origin, citizenship status, physical or mental disability, race, religion, creed, gender, sex, sexual orientation, gender identity and/or expression, genetic information, marital status, status with regard to public assistance, veteran status, or any other characteristic protected by federal, state or local law. In addition, Carrot Inc. will provide reasonable accommodations for qualified individuals with disabilities.</p>
                         
                          </Col>
                         
                        </Row>
                      
                </Container>
                <Container fluid="xxl" className="career-section bg-business my-5 rounded-8 py-6">
                     <Row className='justify-content-center'>
                        
                         <Col sm={12} md={10}>
                             <Row className='mb-4'>
                             <Col sm={7}>
                            <h2 className="text-start">Apply for this Job</h2>
                         </Col>
                         <Col sm={5} className='text-end'>
                            <p className="text-dark">*Required</p>
                         </Col>
                             </Row>
                         <Row >
                       
                        <Col sm={12} md={6} className="mb-3 mb-md-3">
                           <Form.Control type="text" placeholder="First Name*" className="mb-2" />
                        </Col>
                        <Col sm={12} md={6} className="mb-3 mb-md-3">
                           <Form.Control type="text" placeholder="Last Name*" className="mb-2" />
                        </Col>
                        <Col sm={12} md={6} className="mb-3 mb-md-3">
                            <Form.Control type="email" placeholder="E-email*" className="mb-2" />
                        </Col>
                        <Col sm={12} md={6} className="mb-3 mb-md-3">
                            <Form.Control type="tel" placeholder="Linkedin Profile" className="mb-2" />
                        </Col>
                      
                        <Col md="12" className='attacment'>
                           <div className="pt-3">
                           <label className='fw-500'>Resume/CV <span>*</span></label>
                        <input type="file" id="resume" className="sr-only" aria-label="Resume" />
                        <label for="resume" className="text-secondary fw-500 fst-italic ms-5" aria-hidden="true">Attach</label>
                           </div>
                        </Col>
                        <Col md="12" className='attacment mt-5 mb-5'>
                           <div className='border-bottom border-dark pb-5'>
                           <label className='fw-500'>Resume/CV <span>*</span></label>
                        <input type="file" id="resume" className="sr-only" aria-label="Resume" />
                        <label for="resume" className="text-secondary fw-500 fst-italic ms-5" aria-hidden="true">Attach</label>
                           </div>
                        </Col>
                        <Col sm={12} md={12} className="mb-3 mb-md-3">
                            <Form.Control type="text" placeholder="Company’s Name" className="mb-2" />
                        </Col>
                        <Col sm={12} md={12} className="mb-3 mb-md-3">
                            <Form.Control type="text" placeholder="Company’s Name" className="mb-2" />
                        </Col>
                        <Col sm={12} md={12} className="pt-3 pt-md-3 text-end">
                            <Button variant="outline-secondary" className="py-3 px-5 bg-secondary text-white fs-6 fw-semibold rounded-4 btn-form">Submit Application</Button>
                        </Col>
                      </Row>
                         </Col>
                     </Row>
                </Container>
            </section>
            <NewsLetter />
        </>
    )
}

export default Job
