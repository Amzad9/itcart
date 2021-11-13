import React, {useState} from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Nav} from 'react-bootstrap';
import TabContainer from '../Tabs/TabContainer'
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import SlideCard from '../Card/SlideCard';
import {NavData} from '../Utility'
import NextArrow from '../Client/NextArrow';  
import PrevArrow from '../Client/PrevArrow';
import '../Client/Client.scss'
import Static from '../assets/static.png';
import Dynamic from '../assets/dynamic.png';
import Ecommerce from '../assets/ecommerce.png';

// import ScrollAnimation from 'react-animate-on-scroll';
 {/* <ScrollAnimation animateIn="fadeIn">
               Some Text
            </ScrollAnimation> */}

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
        {id: 1, img: Static, title: 'Digital (DX) Collaboration Portal'},
        {id: 2, img: Dynamic,  title: 'Corporate Internet Portal'},
        {id: 3, img: Ecommerce, title: 'Document Management System (DMS)'},
        {id: 4, img: Static, title: 'Digital Learning Platform'},
        {id: 5, img: Static, title: 'Digital Process Management'},
        {id: 6, img: Static, title: 'Project Management System'}
      ]
      const appd = [
        {id: 1, img: Static, title: 'Customer Service Apps'},
        {id: 2, img: Dynamic,  title: 'Business Process Apps'},
        {id: 3, img: Ecommerce, title: 'Utility & Tools Apps'},
        {id: 4, img: Static, title: 'E-Commerce Apps'},
        {id: 5, img: Static, title: 'Digital Learning Apps'},
        {id: 6, img: Static, title: 'Employee E-Service Apps'}
      ]
      const businessd = [
        {id: 1, img: Static, title: 'Employee Management automation'},
        {id: 2, img: Dynamic,  title: 'Supply Chain Automation'},
        {id: 3, img: Ecommerce, title: 'Business Workflow Automation'},
        {id: 4, img: Static, title: 'Customer Support Automation'},
        {id: 5, img: Static, title: 'Inter-Department Review Automation'},
        {id: 6, img: Static, title: 'Document management Automation'}
      ]
      const Technologyd = [
        {id: 1, img: Static, title: 'Digital Transformation (DX) solutions'},
        {id: 2, img: Dynamic,  title: 'E-Commerce (SaaS) solutions'},
        {id: 3, img: Ecommerce, title: 'SharePoint Online solutions'},
        {id: 4, img: Static, title: 'Office 365 solutions'},
        {id: 5, img: Static, title: 'SharePoint On Premise solutions'},
        {id: 6, img: Static, title: 'Azure Cloud solutions'}
      ]
      const SlideData2 = [
        {id: 1, img: Static, title: 'Websites'},
        {id: 2, img: Dynamic,  title: 'Dynamic'},
        {id: 3, img: Ecommerce, title: 'Commerce'},
        {id: 4, img: Static, title: 'Development'}
      ]
      
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
                            <Col xs={12} md={6} lg={4} xl={4} className="mb-4">
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h6>{item.title}</h6>
                                </SlideCard>
                            </Col>
                            ))}
                        </Row>
                   : index === 1 ?
                    <Row>
                    {appd.map(item => (
                        <Col md={4} className="mb-4">
                            <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                <h6>{item.title}</h6>
                            </SlideCard>
                        </Col>
                        ))}
                    </Row>
                   : index === 2 ?
                        <Row>
                           {businessd.map(item => (
                             <Col md={4} className="mb-4">
                                <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                    <h6>{item.title}</h6>
                                </SlideCard>
                             </Col>
                            ))}
                        </Row>
                   :index === 3 ?
                    <Row>
                       {Technologyd.map(item => (
                        <Col md={4} className="mb-4">
                            <SlideCard classBody="pb-0 d-flex align-items-center" className="border-0 bg-light px-3 pt-3 pb-0" src={item.img}>
                                <h6>{item.title}</h6>
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
