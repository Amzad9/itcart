import React, {useState, useRef} from 'react'
import { Container, Row, Col, Nav, Overlay, Popover} from 'react-bootstrap';
import SlideCard from '../Card/SlideCard';
import '../Client/Client.scss'
import './Team.scss'
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

   
      
      const SlideData = [
        {id: 1, img: Union, title: 'Attila Probáld CEO', subtitle: 'feat. Agency'},
        {id: 2, img: Union,  title: 'Attila Probáld CEO', subtitle: 'feat. Agency'},
        {id: 3, img: Union, title: 'Attila Probáld CEO', subtitle: 'feat. Agency'},
        {id: 1, img: Union, title: 'Attila Probáld CEO', subtitle: 'feat. Agency'}
      ]
      
    return (
        <section className="clients service team py-5">
           <Container fluid="xxl">
               <Row>
                   <Col className="text-center" md="12">
                       <h2>Meet the Team</h2>
                       <h4>who make this possible</h4>
                   </Col>
               </Row>
               
           </Container>
            <Container className="pt-4" fluid="xxl">
                <Row >
                    
                       
                       
                            {SlideData.map(item => (
                             <Col className="mb-4 mb-xl-0" sm={12} md={6} xl={3} ref={ref}>
                                <SlideCard  onClick={handleClick} classBody="pb-0" className="border-0 bg-white shadow-none p-0" src={item.img}>
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
                                        <Popover className="bg-blue meet-overlay" id="popover-contained">
                                        
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
                                </Col>
                            ))}
            
                        
                    
                </Row>
                <Row>
                    <Col md={12} className="pt-5">
                       <Nav.Link className="fs-6 text-blue text-center">MEET THE WHOLE TEAM <i className="bi bi-arrow-right"></i></Nav.Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PeopleSay
