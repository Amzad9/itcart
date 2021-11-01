import React from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Button from '../Button/button';
import './FormControl.scss'
function FormControl() {
    return (
        <>
             <Row>
                <Col sm={12} md={4} className="mb-3 mb-md-0">
                    <Form.Control type="text" placeholder="Name*" />
                </Col>
                <Col sm={12} md={4} className="mb-3 mb-md-0">
                    <Form.Control type="email" placeholder="E-email*" />
                </Col>
                <Col sm={12} md={4} className="mb-3 mb-md-0">
                    <Form.Control type="email" placeholder="Phone*" />
                </Col>
                <Col sm={12} md={12} className="mb-3 mb-md-0">
                    <Form.Group className="mb-3 mt-0 mt-md-5" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className="pt-4" as="textarea" rows="13"  placeholder="Tell us all about it...." />
                    </Form.Group>
                </Col>
                <Col sm={12} md={12} className="pt-3 pt-md-3">
                   <Button variant="outline-secondary" className="py-3 px-5 fs-6 fw-semibold rounded-4 btn-form">Send Message</Button>
                </Col>
            </Row>
        </>
    )
}

export default FormControl
