import React, {useState, useRef} from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Nav, Overlay, Popover} from 'react-bootstrap';
import SlideCard from '../Card/SlideCard';
import NextArrow from '../Client/NextArrow';  
import PrevArrow from '../Client/PrevArrow';
import '../Client/Client.scss'
import './PeopleSay.scss'
import Union from '../assets/Union.png';


// import ScrollAnimation from 'react-animate-on-scroll';
 {/* <ScrollAnimation animateIn="fadeIn">
               Some Text
            </ScrollAnimation> */}

const PeopleSay = () => {
   
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
        infinite: true,
        autoplay: true,
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
                slidesToShow: 3,
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
      
      const SlideData = [
        {id: 1, img: Union, title: 'Attila Probáld CEO', subtitle: 'feat. Agency'},
        {id: 2, img: Union,  title: 'Attila Probáld CEO', subtitle: 'feat. Agency'},
        {id: 3, img: Union, title: 'Attila Probáld CEO', subtitle: 'feat. Agency'},
        {id: 1, img: Union, title: 'Attila Probáld CEO', subtitle: 'feat. Agency'}
      ]
      
    return (
        <section className="clients  PeopleSay py-5">
           <Container fluid="xl">
               <Row>
                   <Col classNAme="text-center" md="12">
                       <h2>What People Say</h2>
                   </Col>
               </Row>
               
           </Container>
            <Container className="pt-4" fluid="xl">
                <Row>
                    <Col md={12} ref={ref}>
                       
                        <Slider {...SERVICE_SLIDER_SETTINGS}>
                            {SlideData.map(item => (
                                <SlideCard  onClick={handleClick} classBody="pb-0" className="bg-white shadow-none p-0" src={item.img}>
                                   <div>
                                      <h4>{item.title}</h4>
                                      <p className="fs-6">{item.subtitle}</p>
                                   </div>
                                   {/* <div className="popup bg-blue p-3 text-white pe-4">
                                        <small> “We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.”
                                             feat. Agency
                                        </small>
                                         <h6 className="mb-0 mt-3">{item.title}</h6>
                                         <p className="fs-6">{item.subtitle}</p>
                                   </div> */}
                                   <Overlay
                                        show={show}
                                        target={target}
                                        placement="right-end"
                                        container={ref}
                                        containerPadding={20}
                                    >
                                        <Popover className="bg-blue" id="popover-contained">
                                        
                                        <Popover.Body>
                                            <small className="text-white"> “We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.”
                                                feat. Agency
                                            </small>
                                            <h6 className="mb-0 mt-3 text-white">{item.title}</h6>
                                            <p className="fs-6 text-white">{item.subtitle}</p>
                                        </Popover.Body>
                                        </Popover>
                                    </Overlay>
                                </SlideCard>
                            ))}
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

export default PeopleSay
