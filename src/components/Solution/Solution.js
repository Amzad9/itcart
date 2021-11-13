import React, {useState} from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Nav} from 'react-bootstrap';
import TabContainer from '../Tabs/TabContainer'
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import SlideCard from '../Card/SlideCard';
import {SolutionData} from '../Utility'
import NextArrow from '../Client/NextArrow';  
import PrevArrow from '../Client/PrevArrow';
import '../Client/Client.scss'
// import Attendance from '../assets/atten.png';
// import Payroll from '../assets/pay.png';
// import Performance from '../assets/perfor.png';
import Static from '../assets/static.png';
import Dynamic from '../assets/dynamic.png';
import Ecommerce from '../assets/ecommerce.png';
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
        {id: 1, img: Static, title: 'Employee Management'},
        {id: 2, img: Dynamic,  title: 'Recruitment Process Management'},
        {id: 3, img: Ecommerce, title: 'Onboarding Process Management'},
        {id: 4, img: Static, title: 'Attendance & Time Logs Management'},
        {id: 5, img: Static, title: 'Employee Leave Management'},
        {id: 6, img: Static, title: 'Travel & Expense Claims Processing'}
      ]
      const cms = [
        {id: 1, img: Static, title: 'Document Change Request (DCR)'},
        {id: 2, img: Dynamic,  title: 'Business Change Request (BCR)'},
        {id: 3, img: Ecommerce, title: 'Non-Conformity Reporting (NCR)'},
        {id: 4, img: Static, title: 'IT Service Request & Approval'},
        {id: 5, img: Static, title: 'Capital Expenditure Note Approval (CapEx)'},
        {id: 6, img: Static, title: 'KYC Update Request and Approval'}
      ]
      const businE = [
        {id: 1, img: Static, title: 'Digital Transformation (DX) Management'},
        {id: 2, img: Dynamic,  title: 'Corporate Document Management'},
        {id: 3, img: Ecommerce, title: 'Business Workflow Automation'},
        {id: 4, img: Static, title: 'Department Data Management'},
        {id: 5, img: Static, title: 'IT Asset Management'},
        {id: 6, img: Static, title: 'KYC Management'}
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
