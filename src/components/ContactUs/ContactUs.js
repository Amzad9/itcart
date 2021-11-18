import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap';
// import SlideCard from '../Card/SlideCard';
import FormControl from './FormControl'
import Phone from '../assets/phone.png';
import Map from '../assets/map.png';
import Mail from '../assets/mail.png';
import './ContactUs.scss'

// import ScrollAnimation from 'react-animate-on-scroll';
 {/* <ScrollAnimation animateIn="fadeIn">
               Some Text
            </ScrollAnimation> */}

const ContactUs = () => {
   
  
      
    return (
        <section className="contactus py-5">
          
            <Container className="pt-4" fluid="xl">
               <Row className="mb-5">
                   <Col className="text-center" md="12">
                       <h2>Get in Touch</h2>
                       <h4>with us</h4>
                   </Col>
               </Row>
             
               <Row className="justify-content-center mt-5">
                  <Col sm={12} md={12} lg={5} xxl={5} className="left-b">
                       <Row className="align-content-center flex-column">
                            <Card className="green px-4 align-items-center text-center justify-content-center bg-white shadow-none pt-4 mb-2">
                                <img   src={Phone} alt="" className="m-0" />
                                <p className="mt-4 fs-6 fw-semibold text-dark">Interested in IT Cart’s software? Just pick up the phone to chat with a member of our sales team.</p>
                                <h4>+91 11 7127 9211</h4>
                            </Card>

                            <Card  className="red px-5 align-items-center text-center justify-content-center bg-white shadow-none pt-4 mb-2">
                                <img src={Map} alt="" className="m-0" />
                                <p className="mt-4 fs-6 fw-semibold text-dark">25 First Street, 2nd Floor Cambridge, MA 02141 United States</p>
                            </Card>

                            <Card  className="blue align-items-center text-center justify-content-center bg-white shadow-none pt-4 mb-4">
                                <img src={Mail} alt="" className="m-0" />
                                <p className="mt-5 fs-6 fw-semibold text-dark">contactus@itcart.in</p>
                            </Card>

                      </Row>
                  </Col>
                  <Col sm={12} md={12} lg={7} xxl={7}>
                        <Row>
                         <Col className=" mb-3" md={12}>
                            <h2 className="text-start fw-normal">Write to us  |  Didn’t find what you were looking for?</h2>
                            <h4>Let us help you...</h4>
                         </Col>
                       </Row>
                       <FormControl />
                   </Col>
               </Row>
            </Container>
        </section>
    )
}

export default ContactUs
