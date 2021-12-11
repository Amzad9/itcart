import React, {useState, useRef} from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Nav, Overlay, Popover} from 'react-bootstrap';
import NextArrow from '../Client/NextArrow';  
import PrevArrow from '../Client/PrevArrow';
import SlideCard from '../Card/SlideCard';
import Union from '../assets/Union.png';
const Blog = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };


    const SERVICE_SLIDER_SETTINGS = {
        dots: false,
        arrows: true,
        // infinite: true,
        // autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // centerMode: true,
        centerPadding: '0px',
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                arrows: false,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }
          ]
      };
      
    return (
        <section className="clients  PeopleSay py-5">
        <Container fluid="xxl" className="bg-service rounded-8 px-0 px-md-6 pt-5 pb-4">
            <Row className="mx-0">
                <Col classNAme="text-center" md="12">
                    <h2>Blogs</h2>
                </Col>
            </Row>
            
       
             <Row className="mx-0">
                 <Col md={12} ref={ref}>
                    
                     <Slider {...SERVICE_SLIDER_SETTINGS}>
                        
                             <SlideCard className="bg-white p-0 border-0">
                                <img src={Union} alt="" />
                                
                             </SlideCard>
                             <SlideCard className="bg-white p-0 border-0">
                             <img src={Union} alt="" />
                             </SlideCard>
                             <SlideCard className="bg-white p-0 border-0">
                             <img src={Union} alt="" />
                               </SlideCard>
                               <SlideCard className="bg-white p-0 border-0">
                               <img src={Union} alt="" />
                               </SlideCard>
                      
                     </Slider>
                     
                 </Col>
             </Row>
             <Row>
                 <Col md={12} className="pt-4">
                    <Nav.Link className="fs-6 text-blue text-center">READ MORE <i className="bi bi-arrow-right"></i></Nav.Link>
                 </Col>
             </Row>
         </Container>
     </section>
    )
}

export default Blog