import React, {useState} from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Nav} from 'react-bootstrap';
import TabContainer from '../Tabs/TabContainer'
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import SlideCard from '../Card/SlideCard';
import {NavData} from '../Utility'
// import NextArrow from '../Client/NextArrow';  
// import PrevArrow from '../Client/PrevArrow';
import '../Client/Client.scss'
import Digital from '../assets/Web/1.png';
import Corporate from '../assets/Web/2.png';
import Document from '../assets/Web/3.png';
import Learning from '../assets/Web/4.png';
import Process from '../assets/Web/5.png';
import Project from '../assets/Web/6.png';

import Customer from '../assets/app/1.png';
import Business from '../assets/app/2.png';
import Utility from '../assets/app/3.png';
import Commerce from '../assets/app/4.png';
import Apps from '../assets/app/5.png';
import Employee from '../assets/app/6.png';


import Management from '../assets/Business/1.png';
import Supply from '../assets/Business/2.png';
import Business1 from '../assets/Business/3.png';
import Customer1 from '../assets/Business/4.png';
import Department from '../assets/app/5.png';
import Document1 from '../assets/Business/6.png';


import solutions from '../assets/tech/1.png';
import SaaS from '../assets/tech/2.png';
import SharePoint from '../assets/tech/3.png';
import Office from '../assets/Business/3.png';
import Premise from '../assets/tech/3.png';
import Azure from '../assets/tech/3.png';

const Service = () => {
   
    const [index, setIndex] = useState(0)

    // const SERVICE_SLIDER_SETTINGS = {
    //     dots: false,
    //     arrows: true,
    //     infinite: true,
    //     autoplay: true,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     adaptiveHeight: true,
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
      
    //   const SlideData = [
    //     {id: 1, img: Static, title: 'Static Websites'},
    //     {id: 2, img: Dynamic,  title: 'Dynamic Websites'},
    //     {id: 3, img: Ecommerce, title: 'E-Commerce'},
    //     {id: 4, img: Static, title: 'App Development'}
    //   ]
      const web = [
        {id: 1, img: Digital, title: 'Digital (DX) Collaboration Portal'},
        {id: 2, img: Corporate,  title: 'Corporate Internet Portal'},
        {id: 3, img: Document, title: 'Document Management System (DMS)'},
        {id: 4, img: Learning, title: 'Digital Learning Platform'},
        {id: 5, img: Process, title: 'Digital Process Management'},
        {id: 6, img: Project, title: 'Project Management System'}
      ]
      const appd = [
        {id: 1, img: Customer, title: 'Customer Service Apps'},
        {id: 2, img: Business,  title: 'Business Process Apps'},
        {id: 3, img: Utility, title: 'Utility & Tools Apps'},
        {id: 4, img: Commerce, title: 'E-Commerce Apps'},
        {id: 5, img: Apps, title: 'Digital Learning Apps'},
        {id: 6, img: Employee, title: 'Employee E-Service Apps'}
      ]
      const businessd = [
        {id: 1, img: Management, title: 'Employee Management automation'},
        {id: 2, img: Supply,  title: 'Supply Chain Automation'},
        {id: 3, img: Business1, title: 'Business Workflow Automation'},
        {id: 4, img: Customer1, title: 'Customer Support Automation'},
        {id: 5, img: Department, title: 'Inter-Department Review Automation'},
        {id: 6, img: Document1, title: 'Document management Automation'}
      ]
      const Technologyd = [
        {id: 1, img: solutions, title: 'Digital Transformation (DX) solutions'},
        {id: 2, img: SaaS,  title: 'E-Commerce (SaaS) solutions'},
        {id: 3, img: SharePoint, title: 'SharePoint Online solutions'},
        {id: 4, img: Office, title: 'Office 365 solutions'},
        {id: 5, img: Premise, title: 'SharePoint On Premise solutions'},
        {id: 6, img: Azure, title: 'Azure Cloud solutions'}
      ]
    //   const SlideData2 = [
    //     {id: 1, img: Static, title: 'Websites'},
    //     {id: 2, img: Dynamic,  title: 'Dynamic'},
    //     {id: 3, img: Ecommerce, title: 'Commerce'},
    //     {id: 4, img: Static, title: 'Development'}
    //   ]
      
    return (
        <section className="clients service py-b mar-nagative bg-white">
           <Container fluid="xxl">
               <Row>
                   <Col classNAme="text-center" md="12">
                       <h2>Our Services</h2>
                   </Col>
               </Row>
               <Row className="mt-5 mb-4 service-tab">
                   <Col md={12}>
                        <TabContainer activeTab="web">
                            <Tabs ClassName="justify-content-start justify-content-lg-start justify-content-xxl-center">
                                {NavData.map( (item , index)=> (
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
                         {web.map(item => (
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
                    {appd.map(item => (
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
                           {businessd.map(item => (
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
                   :index === 3 ?
                    <Row>
                       {Technologyd.map(item => (
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

                    {/* <Col md={12}>
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
                            {SlideData2.map(item => (
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
                    </Col> */}
               
                <Row>
                    <Col md={12} className="pt-5">
                       <Nav.Link className="fs-6 text-blue text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Service
