import React, {useState, useRef} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import SlideCard from '../Card/SlideCard';
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
   
      const contactData = [
        {id: 1, img: Phone},
        {id: 2, img: Map},
        {id: 3, img: Mail},
      ]
      
    return (
        <section className="contactus py-5">
          
            <Container className="pt-4" fluid="xxl">
               <Row className="mb-5">
                   <Col className="text-center" md="12">
                       <h2>Get in Touch</h2>
                       <h4>with us</h4>
                   </Col>
               </Row>
               <Row className="justify-content-around ">
                   <Col sm={12} md={12} lg={9} xxl={9}>
                      <Row className="justify-content-between mx-0 flex-wrap flex-md-nowrap">
                         {contactData.map(item => (
                            
                                 <SlideCard   
                                   classBody="pb-0 d-none" 
                                   className="align-items-center bg-white shadow-none p-0" 
                                   src={item.img}>
                                        
                                  </SlideCard>
                               
                            ))}
            
                      </Row>
                      
                   </Col>
               </Row>
               <Row className="justify-content-center mt-5">
                  <Col sm={12} md={12} lg={9} xxl={9}>
                        <Row>
                         <Col className="ps-5 mb-3" md={12}>
                            <h2 className="text-start">Write to us  |  Didn’t find what you were looking for?</h2>
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
