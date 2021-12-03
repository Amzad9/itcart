import React from 'react'
import {Row, Col, Form, FormGroup, Input} from 'react-bootstrap';
import Button from '../Button/button';
import './FormControl.scss'
function FormControl() {
    return (
        <>
             <Row>
                <Col sm={12} md={12} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="text" placeholder="Name*" className="mb-2" />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="email" placeholder="E-email*" className="mb-2"/>
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="tel" placeholder="Phone" className="mb-2"/>
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="text" placeholder="Company’s Name" className="mb-2"/>
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <FormGroup>
                        <select className="form-control" name="select" id="exampleSelect">
                           <option>Size of your company</option>
                            <option>0-10</option>
                            <option>11-50</option>
                            <option>51-250</option>
                            <option>251-500</option>
                            <option>501+</option>
                        </select>
                    </FormGroup>
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0 mt-2">
                    <FormGroup>
                        <select className="form-control" name="select" id="exampleSelect">
                            <option>Services</option>
                            <option>Web Development</option>
                            <option>App Development</option>
                            <option>Business Automation</option>
                            <option>Technology Consulting</option>
                            
                        </select>
                    </FormGroup>
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0 mt-4">
                    <FormGroup>
                        <select className="form-control" name="select" id="exampleSelect">
                            <option>Solutions</option>
                            <option>HRMS Automation</option>
                            <option>E-Services Automation</option>
                            <option>MIS Automation</option>
                            <option>Enterprise Solutions</option>
                            
                        </select>
                    </FormGroup>
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
