import React, {useState} from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Nav} from 'react-bootstrap';
import Button from '../Button/button';
import TabContainer from '../Tabs/TabContainer'
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import SlideCard from '../Card/SlideCard';
import {SolutionData} from '../Utility'
import'./Solution.scss'
// import NextArrow from '../Client/NextArrow';  
// import PrevArrow from '../Client/PrevArrow';
import '../Client/Client.scss';

import Emp from '../assets/hrms/1.png';
import Recru from '../assets/hrms/2.png';
import Onboarding from '../assets/hrms/3.png';
import Attendance from '../assets/hrms/4.png';
import Employee from '../assets/hrms/5.png';
import Travel from '../assets/hrms/6.png';

import Document from '../assets/EService/1.png';
import Business from '../assets/EService/2.png';
import Non from '../assets/EService/3.png';
import Service from '../assets/EService/4.png';
import Capital from '../assets/EService/5.png';
import KYC from '../assets/EService/6.png';


import Digital from '../assets/MIS/1.png';
import Corporate from '../assets/MIS/3.png';
import Department from '../assets/MIS/3.png';
import Asset from '../assets/MIS/4.png';
import Management from '../assets/MIS/5.png';
import Customer from '../assets/MIS/6.png';


import degree from '../assets/EnterP/1.png';
import Real from '../assets/EnterP/3.png';
import Performance from '../assets/EnterP/3.png';
import Industrial from '../assets/EnterP/4.png';
import Healthcare from '../assets/EnterP/5.png';
import Procurement from '../assets/EnterP/6.png';

// import ScrollAnimation from 'react-animate-on-scroll';
 {/* <ScrollAnimation animateIn="fadeIn">
               Some Text
            </ScrollAnimation> */}

const Solution = () => {
   
    const [index, setIndex] = useState(0)



    // const SERVICE_SLIDER_SETTINGS = {
    //     dots: false,
    //     arrows: true,
    //     infinite: true,
    //     autoPlay: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
    //     // centerMode: true,
    //     centerPadding: '0px',
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PrevArrow />,
    //     responsive: [
    //         {
    //           breakpoint: 1023,
    //           settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             dots: false,
    //             arrows: false,
    //           }
    //         },
    //         {
    //           breakpoint: 600,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             initialSlide: 1,
    //             arrows: false,
    //           }
    //         },
    //         {
    //           breakpoint: 480,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             arrows: false,
    //           }
    //         }
    //       ]
    //   };
    const hrm = [
        {id: 1, img:Emp, title: 'Employee Management'},
        {id: 2, img:Recru,  title: 'Recruitment Process Management'},
        {id: 3, img:Onboarding, title: 'Onboarding Process Management'},
        {id: 4, img:Attendance, title: 'Attendance & Time Logs Management'},
        {id: 5, img:Employee, title: 'Employee Leave Management'},
        {id: 6, img:Travel, title: 'Travel & Expense Claims Processing'}
      ]
      const cms = [
        {id: 1, img:Document, title: 'Document Change Request (DCR)'},
        {id: 2, img:Business,  title: 'Business Change Request (BCR)'},
        {id: 3, img:Non, title: 'Non-Conformity Reporting (NCR)'},
        {id: 4, img:Service, title: 'IT Service Request & Approval'},
        {id: 5, img:Capital, title: 'Capital Expenditure Note Approval (CapEx)'},
        {id: 6, img:KYC, title: 'KYC Update Request and Approval'}
      ]
      const businE = [
        {id: 1, img:Digital, title: 'Digital Transformation (DX) Management'},
        {id: 2, img:Corporate,  title: 'Corporate Document Management'},
        {id: 3, img:Department, title: 'Business Workflow Automation'},
        {id: 4, img: Asset, title: 'Department Data Management'},
        {id: 5, img: Management, title: 'IT Asset Management'},
        {id: 6, img: Customer, title: 'KYC Management'}
      ]
      const enterP = [
        {id: 1, img: degree, title: '360 degree Digital Transformation (DX)'},
        {id: 2, img: Real,  title: 'Real Estate Digital Solution'},
        {id: 3, img: Performance, title: 'Performance Management Automation'},
        {id: 4, img: Industrial, title: 'Industrial Process Automation'},
        {id: 5, img: Healthcare, title: 'Healthcare Management System'},
        {id: 6, img: Procurement, title: 'Procurement Management System '}
      ]
      
    //   const SlideData = [
    //     {id: 1, img: Attendance, title: 'Attendance Module'},
    //     {id: 2, img: Payroll,  title: 'Payroll Management'},
    //     {id: 3, img: Performance, title: 'Performance Management'},
    //     {id: 1, img: Attendance, title: 'Attendance Module'}
    //   ]
    const iconC = <svg className="me-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.55548 15.111C11.7283 15.111 15.111 11.7283 15.111 7.55548C15.111 3.38271 11.7283 0 7.55548 0C3.3827 0 0 3.38271 0 7.55548C0 11.7283 3.3827 15.111 7.55548 15.111Z" fill="#DD87B8"/>
    <path d="M6.80691 10.4377C6.63693 10.438 6.47147 10.383 6.33548 10.2811L6.32705 10.2747L4.55141 8.91642C4.46917 8.85338 4.40016 8.77475 4.34831 8.68503C4.29646 8.59531 4.2628 8.49625 4.24923 8.39352C4.23566 8.29079 4.24245 8.18639 4.26923 8.08629C4.296 7.98618 4.34223 7.89233 4.40528 7.81009C4.46832 7.72786 4.54694 7.65884 4.63665 7.60699C4.72637 7.55514 4.82543 7.52146 4.92817 7.50789C5.0309 7.49432 5.13531 7.50112 5.23541 7.5279C5.33552 7.55467 5.42936 7.6009 5.5116 7.66395L6.66172 8.54591L9.37949 5.00025C9.44251 4.91805 9.52111 4.84906 9.61079 4.79724C9.70047 4.74541 9.79949 4.71176 9.90218 4.6982C10.0049 4.68463 10.1092 4.69143 10.2093 4.7182C10.3093 4.74497 10.4032 4.79118 10.4854 4.8542L10.4856 4.85438L10.4687 4.87781L10.486 4.85438C10.6519 4.98183 10.7604 5.16989 10.7878 5.37725C10.8151 5.58462 10.7591 5.79436 10.6319 5.96046L7.43523 10.1291C7.36127 10.2251 7.26618 10.3028 7.15733 10.3562C7.04849 10.4096 6.92881 10.4371 6.80759 10.4368L6.80691 10.4377Z" fill="white"/>
    </svg>;
    return (
        <section className="clients service solutuon pb-5">
           <Container fluid="xxl">
               <Row>
                   <Col classNAme="text-center" md="12">
                       <h2>Our Solution</h2>
                   </Col>
               </Row>
               <Row className="mt-5 mb-4">
                   <Col md={12}>
                        <TabContainer activeTab="HRMS">
                            <Tabs ClassName="justify-content-start justify-content-md-center">
                                {SolutionData.map( (item , index)=> (
                                   <Nav.Item>
                                      <NavLink onClick={() => setIndex(index)} eventKey={item.key} title={item.title} />
                                   </Nav.Item>
                                ))}
                            </Tabs>
                        </TabContainer>
                   </Col>
               </Row>
             
           </Container>
            <Container className="pt-4" fluid="xxl">
            {index === 0 ? 
                      <Row>
                         {hrm.map(item => (
                            <Col xs={12} md={6} lg={4} xl={4} className="mb-4 flip">
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light front px-3 pt-3 pb-0" src={item.img}>
                                    <h6>{item.title}</h6>
                                </SlideCard>
                                <SlideCard classBody="pb-0 text-center" className="border-0 bg-light back px-3 pt-3 pb-0">
                                     <h5 className="text-black">{item.title}</h5>
                                     <ul className="text-start list">
                                         <li>{iconC }Stored centrally, access from anywhere</li>
                                         <li>{iconC }Manage employment details</li>
                                         <li>{iconC }Manage personal information</li>
                                         <li>{iconC }Manage employee documents</li>
                                         <li>{iconC }Automated document workflows</li>
                                         <li>{iconC }Celebrate birthdays & anniversaries</li>
                                      
                                     </ul>
                                     <Row className="btn-wrapper-solution justify-content-between px-3   mt-4">
                                       <Col sm={6} className="text-start">
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6} className="text-end">
                                       
                                        <Button className="text-white fs-6 px-0 btn2">Enquire Now</Button>
                                       
                                       </Col>
                                       <Col sm={12} className="mt-4">
                                   
                                       <Button className="text-white w-100 bg-secondary btn-b">Get Brochure</Button>
                                      </Col>
                                     </Row>
                                </SlideCard>
                            </Col>
                            ))}
                        </Row>
                   : index === 1 ?
                    <Row>
                    {cms.map(item => (
                        <Col xs={12} md={6} lg={4} xl={4} className="mb-4 flip">
                            <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 front bg-light px-3 pt-3 pb-0" src={item.img}>
                                <h6>{item.title}</h6>
                            </SlideCard>
                                 <SlideCard classBody="pb-0 text-center" className="border-0 bg-light back px-3 pt-3 pb-0">
                                    <h5 className="text-black">{item.title}</h5>
                                    
                                     <p className="fs4">Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                                     <Row className="btn-wrapper-solution justify-content-between px-3 mt-5">
                                       <Col sm={6} className="text-start">
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6} className="text-end">
                                       
                                        <Button className="text-white fs-6 px-0 btn2">Enquire Now</Button>
                                       
                                       </Col>
                                       <Col sm={12} className="mt-4">
                                   
                                       <Button className="text-white w-100 bg-secondary btn-b">Get Brochure</Button>
                                      </Col>
                                     </Row>
                                </SlideCard>
                        </Col>
                        ))}
                    </Row>
                   : index === 2 ?
                        <Row>
                           {businE.map(item => (
                             <Col xs={12} md={6} lg={4} xl={4} className="mb-4 flip">
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 front bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h6>{item.title}</h6>
                                </SlideCard>
                                <SlideCard classBody="pb-0 text-center" className="border-0 bg-light back px-3 pt-3 pb-0">
                                    <h5 className="text-black">{item.title}</h5>
                                    
                                     <p className="fs4">Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                                     <Row className="btn-wrapper-solution justify-content-between px-3 mt-5">
                                       <Col sm={6} className="text-start">
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6} className="text-end">
                                       
                                        <Button className="text-white fs-6 px-0 btn2">Enquire Now</Button>
                                       
                                       </Col>
                                       <Col sm={12} className="mt-4">
                                   
                                       <Button className="text-white w-100 bg-secondary btn-b">Get Brochure</Button>
                                      </Col>
                                     </Row>
                                </SlideCard>
                             </Col>
                            ))}
                        </Row>
                       : index === 3 ?
                        <Row>
                            {enterP.map(item => (
                                <Col xs={12} md={6} lg={4} xl={4} className="mb-4 flip">
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 front bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h6>{item.title}</h6>
                                </SlideCard>
                                <SlideCard classBody="pb-0 text-center" className="border-0 bg-light back px-3 pt-3 pb-0">
                                    <h5 className="text-black">{item.title}</h5>
                                    
                                        <p className="fs4">Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                                        <Row className="btn-wrapper-solution justify-content-between px-3 mt-5">
                                       <Col sm={6} className="text-start">
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6} className="text-end">
                                       
                                        <Button className="text-white fs-6 px-0 btn2">Enquire Now</Button>
                                       
                                       </Col>
                                       <Col sm={12} className="mt-4">
                                   
                                       <Button className="text-white w-100 bg-secondary btn-b">Get Brochure</Button>
                                      </Col>
                                     </Row>
                                </SlideCard>
                                </Col>
                            ))}
                        </Row>
                       : null}
                {/* <Row>
                    <Col md={12}>
                        {index === 0 ? 
                        <Slider {...SERVICE_SLIDER_SETTINGS}>
                            {SlideData.map(item => (
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h5>{item.title}</h5>
                                </SlideCard>
                            ))}
                        </Slider>
                        : index === 1 ? 
                        <Slider {...SERVICE_SLIDER_SETTINGS}>
                            {SlideData.map(item => (
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h5>{item.title}</h5>
                                </SlideCard>
                            ))}
                        </Slider>
                        : index === 2 ? 
                        <Slider {...SERVICE_SLIDER_SETTINGS}>
                            {SlideData.map(item => (
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h5>{item.title}</h5>
                                </SlideCard>
                            ))}
                        </Slider>
                        : index === 3 ? 
                        <Slider {...SERVICE_SLIDER_SETTINGS}>
                            {SlideData.map(item => (
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h5>{item.title}</h5>
                                </SlideCard>
                            ))}
                        </Slider>
                        :null}
                    </Col>
                </Row> */}
                <Row>
                    <Col md={12} className="pt-5">
                       <Nav.Link className="fs-6 text-sky text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Solution
