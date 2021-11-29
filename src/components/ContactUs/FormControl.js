import React from 'react'
import {Row, Col, Form} from 'react-bootstrap';
import Button from '../Button/button';
import './FormControl.scss'
function FormControl() {
    return (
        <>
             <Row>
                <Col sm={12} md={12} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="text" placeholder="Name*" className="mb-2" />
                </Col>
                <Col sm={12} md={12} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="email" placeholder="E-email*" className="mb-2"/>
                </Col>
                <Col sm={12} md={12} className="mb-3 mb-md-0">
                    <Form.Control type="email" placeholder="Phone*" className="mb-2"/>
                </Col>
                <Col sm={12} md={12} className="mb-3 mb-md-0">
                    <Form.Group className="mb-3 mt-0 mt-md-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className="pt-4" as="textarea" rows="11"  placeholder="Tell us all about it...." />
                    </Form.Group>
                </Col>
                <Col sm={12} md={8} className="pt-3 pt-md-3">
                    <h4 className="text-secondary mt-3">We shall get back to you shortly</h4>
                </Col>
                <Col sm={12} md={4} className="pt-3 pt-md-3 text-end">
                   <Button variant="outline-secondary" className="py-3 px-4 bg-secondary text-white fs-6 fw-semibold rounded-4 btn-form">Send Message</Button>
                </Col>
            </Row>
        </>
    )
}

export default FormControl
