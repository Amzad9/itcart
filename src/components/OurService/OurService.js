import React, {useState} from 'react'
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import {Solution} from '../Utility'
import CommonTab from '../Careers/CommonTab'
import Blog from '../Blog/Blog'
import '../Careers/CommonTab.scss';
import Adit1 from '../assets/odit1.png';
import Adit2 from '../assets/odit2.png';
import PeopleSay from '../PeopleSay/PeopleSay'

import Img1 from '../assets/service/1.png';
import Img2 from '../assets/service/2.png';
import Img3 from '../assets/service/3.png';
import Img4 from '../assets/service/4.png';
import Img5 from '../assets/service/5.png';
import Img6 from '../assets/service/6.png';
import Img7 from '../assets/service/7.png';
import Img8 from '../assets/service/8.png';
import Img9 from '../assets/service/9.png';
import Img10 from '../assets/service/10.png';
import Img11 from '../assets/service/11.png';
import Img12 from '../assets/service/12.png';


function OurService() {

    const [index, setIndex] = useState(0)
    const  handle = (e) => {
        setIndex(e)
    }
    return (
        <>
           <Banner 
           className='bg-light6'
            subtitle='Did you Digitally Streamline your Business?' 
            title ='Our Services' 
            bodytext="Don't worry, IT Cart does it for you!
            We cover that extra mile to ensure your technology needs are meet with the best in the class expertise, services & support!" />
           
            <section>
                 <Container className="tabs-container" fluid>
                    <Row>
                        <Col md={12} className="">
                                <CommonTab careerData={Solution} onClick={handle} activeTab="Web Development" />
                        </Col>
                    </Row>
                    
                </Container>
                <div  className="career-section">
                   
                {index === 0 ? 
                <div>
                    <section>
                      <Container className="bg-light6 rounded-top-8 px-6 py-5" fluid="xxl">
                        <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Corporate Intranet Portal</h2>
                                
                            </Col>
                         </Row>
                         <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Create your Virtual Office</h4>
                                <p>Work from anywhere in the world by making your office mobile withour Intranet systems, without compromising discipline, productivity, vigilance & much needed security!</p>
                            </Col>
                            <Col  xs={12} md={6}>
                              <img src={Img1} alt="" className='img-fluid'/>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                           <Col  xs={12} md={6}>
                              <img src={Img2} alt="" className='img-fluid'/>
                            </Col>
                            
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Engage employees with Intranet</h4>
                                <p>Get things done the right way with individuals & teams on real-time basis through our collaboration tools!</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={12} className="pt-6">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                       </Container>
                    </section>
                    <section>
                    <Container fluid="xxl" className="bg-light3 px-6 py-5">
                      <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Corporate Public Websites</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Create your Online Presence</h4>
                                <p>Work from anywhere in the world by making your office mobile with our Intranet systems, without compromising discipline, productivity, vigilance & much needed security!</p>
                            </Col>
                            <Col  xs={12} md={6}>
                               <img src={Img3} alt="" className='img-fluid'/>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                           <Col  xs={12} md={6}>
                              <img src={Img4} alt="" className='img-fluid'/>
                            </Col>
                            
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Engage employees with Intranet</h4>
                                <p>Get things done the right way with individuals & teams on real-time basis through our collaboration tools!</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={12} className="pt-6">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section>
                    <Container fluid="xxl" className="bg-light7 px-6 py-5">
                      <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Document Management</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Create your Online Presence</h4>
                                <p>Become accessible to all your potential market by going online and establishing your company’s corporate website!</p>
                            </Col>
                            <Col  xs={12} md={6}>
                            <img src={Img5} alt="" className='img-fluid'/>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                            
                            <Col  xs={12} md={6}>
                            <img src={Img6} alt="" className='img-fluid'/>
                            </Col>
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Position your Brand like never before</h4>
                                <p>What better way to blow your trumpet than your corporate website. Create your unique website with us, in cohesion with your brand philosophy!</p>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-7">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section>
                    <Container fluid="xxl" className="bg-light5 px-6 py-5">
                      <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Digital Learning Platform</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Create collaborative learning platforms</h4>
                                <p>Now you can bring subject matter experts and the students from anywhere in the world into classes in engaging & effective ways!</p>
                            </Col>
                            <Col  xs={12} md={6}>
                            <img src={Img7} alt="" className='img-fluid'/>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                            
                            <Col  xs={12} md={6}>
                            <img src={Img8} alt="" className='img-fluid'/>
                            </Col>
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Scalable, Organized and Transparent</h4>
                                <p>Streamline and track your organization’s training & development process with our scalable solutions which is custom created for your learning needs!</p>
                            </Col>
                            
                        </Row>
                        
                       
                        <Row>
                            <Col md={12} className="pt-6">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section>
                    <Container fluid="xxl" className="bg-light3 px-6 py-5">
                      <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Digital Process Management</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Establish Visual Workflows</h4>
                                <p>We help you create and establish visual workflows of complex processes to enhance process efficiency, effectiveness & productivity</p>
                            </Col>
                            <Col  xs={12} md={6}>
                            <img src={Img9} alt="" className='img-fluid'/>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                            <Col  xs={12} md={6}>
                            <img src={Img10} alt="" className='img-fluid'/>
                            </Col>
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Track the performance with KPIs</h4>
                                <p>Gauge the performance of key elements in the processes with specialized indicators generating reports in real-time</p>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-6">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section>
                    <Container fluid="xxl" className="bg-light5 px-6 py-5">
                      <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Project Management Portal</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Complex projects into workable Modules </h4>
                                <p>Now plan, schedule and manage development stages easily with our built-in program that ups  your project management game!</p>
                            </Col>
                            <Col  xs={12} md={6}>
                            <img src={Img11} alt="" className='img-fluid'/>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                            <Col  xs={12} md={6}>
                            <img src={Img12} alt="" className='img-fluid'/>
                            </Col>
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Never miss your deadlines again</h4>
                                <p>With our real-time progress tracking, resource management & performance indicators, you can always be ahead of delivery date!</p>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-6">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section>
                    <Container fluid="xxl" className="bg-light8 rounded-bottom-8 mb-3 px-6 py-5">
                      <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Audit and Quality Management</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Replace the paperwork Auditing </h4>
                                <p>Manage your auditing process with our tools that saves lot of paper and efforts by bringing you real-time reports of all your processes from all the branches direct to your system!</p>
                            </Col>
                            <Col  xs={12} md={6}>
                                <div>
                                    <img src={Adit1} className='img-fluid' alt="" />
                                </div>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                            <Col  xs={12} md={6}>
                                <div>
                                    <img src={Adit2} className='img-fluid' alt="" />
                                </div>
                            </Col>
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Reduce duplication, improve accuracy</h4>
                                <p>Eliminate the ambiguity and redundancies with our audit tool and get accurate results!</p>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-6">
                               <Nav.Link className="fs-6 text-blue text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                     
                    </div>
                   : index === 1 ?
                      <Container>
                          
                        <Row>
                            <Col xs={12} md={12} className="text-center pb-5 pt-4">
                                <h2>Project Management Portal</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Complex projects into workable Modules </h4>
                                <p>Now plan, schedule and manage development stages easily with our built-in program that ups  your project management game!</p>
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Never miss your deadlines again</h4>
                                <p>With our real-time progress tracking, resource management & performance indicators, you can always be ahead of delivery date!</p>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-7">
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                            <Col  xs={12} md={6} className="ps-5">
                                <h4 className='mb-4'>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={12} className="pt-6">
                                <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                   
                      </Container>
                   : index === 2 ?
                        <Row>
                            <Col  xs={12} md={6}>
                          
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                        </Row>
                    : index === 3 ?
                        <Row>
                            <Col  xs={12} md={6}>
                          
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                        </Row>
                    : null}
                </div>
               
            </section>
            {/* <section className="bg-light5 py-5">
                    <Container fluid="xxl">
                       <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>Integrations</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <ul className="list">
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                </ul>
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-5">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section className="bg-light5 py-5">
                    <Container fluid="xxl">
                       <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>See Our Packages</h2>
                                <h4>Enterprise ready</h4>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center justify-content-between">
                            <Col  xs={12} md={3} className="text-center">
                                 <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                               
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center justify-content-between">
                            <Col  xs={12} md={3} className="text-center">
                                 <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                               
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-5">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section> */}
                    <PeopleSay/>
           
        </>
    )
}

export default OurService;

