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
                                     <p className="fs4">Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
                                     <Row className="btn-wrapper-solution justify-content-between px-3 mt-5">
                                       <Col sm={6}>
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6}>
                                       
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
                                       <Col sm={6}>
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6}>
                                       
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
                                       <Col sm={6}>
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6}>
                                       
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
                                       <Col sm={6}>
                                        <Button className="text-whites fs-6 btn2">Explore</Button>
                                   
                                       </Col>
                                       <Col sm={6}>
                                       
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
