import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './Newsletter.scss'
function NewsLetter() {
    return (
        <section className="bg-info py-5 newslatter">
           <Container>
               <Row>
                   <Col>
                      <h2>Join our Newsletter  </h2>
                   </Col>
               </Row>
               <Row className="justify-content-center">
                   <Col sm={12} md={9} lg={6}>
                       <Form.Group className="mb-3 mt-5 position-relative d-flex" controlId="exampleForm.ControlTextarea1">
                            <Form.Control type="email" placeholder="E-email*" />
                            <Button 
                              variant="outline-secondary" 
                              className="fs-6 fw-semibold bg-white p btn-form">
                              Subscribe
                             </Button>
                        </Form.Group>
                   </Col>
               </Row>
           </Container> 
        </section>
    )
}

export default NewsLetter
