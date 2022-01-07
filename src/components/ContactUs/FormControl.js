import React from 'react'
import { Row, Col, Form, FormGroup, Dropdown } from 'react-bootstrap';
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
                    <Form.Control type="email" placeholder="E-email*" className="mb-2" />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="tel" placeholder="Phone" className="mb-2" />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="text" placeholder="Company’s Name" className="mb-2" />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <FormGroup>
                        {/* <select className="form-control down-arrow position-relative" name="select" id="exampleSelect">
                            {/* <option>Size of your company</option> */}
                        {/* <option>0</option>
                            <option>11-50</option>
                            <option>51-250</option>
                            <option>251-500</option>
                            <option>501+</option> */}

                        {/* </select> */}
                        {/* <div>
                            <ul>
                               <li>0</li>
                               <li>11-50</li>
                               <li>51-250</li>
                               <li>251-500</li>
                               <li>501+</li>
                           </ul>
                        </div> */}

                        <Dropdown className="emp-drop">
                            <Dropdown.Toggle variant="" className="form-control" id="dropdown-basic">
                                Size of your company
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="p-0 form-control">
                                <Dropdown.Item href="#/action-1">0</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">11-50</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">51-250</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">251-500</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">501+</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>


                    </FormGroup>
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0 mt-4">
                    <FormGroup>
                        {/* <select className="form-control" name="select" id="exampleSelect">
                            <option>Services</option>
                            <option>Web Development</option>
                            <option>App Development</option>
                            <option>Business Automation</option>
                            <option>Technology Consulting</option>
                            
                        </select> */}
                        <Dropdown className="check-drop">
                            <Dropdown.Toggle variant="" className="form-control" id="dropdown-basic">
                                Services
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="p-0 form-control">
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-1">
                                    <span>Web Development</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-2">
                                    <span>App Development</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-3">
                                    <span>Business Automation</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-3">
                                    <span>Technology Consulting</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0 mt-4">
                    <FormGroup>
                        {/* <select className="form-control" name="select" id="exampleSelect">
                            <option>Solutions</option>
                            <option>HRMS Automation</option>
                            <option>E-Services Automation</option>
                            <option>MIS Automation</option>
                            <option>Enterprise Solutions</option>
                            
                        </select> */}
                        <Dropdown className="check-drop">
                            <Dropdown.Toggle variant="" className="form-control" id="dropdown-basic">
                                Solutions
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="p-0 form-control">
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-1">
                                    <span>HRMS Automation</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-2">
                                    <span>E-Services Automation</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-3">
                                    <span>MIS Automation</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                                <Dropdown.Item className="d-flex align-iems-center justify-content-between" href="#/action-3">
                                    <span>Enterprise Solutions</span>
                                    <Form.Check type="checkbox" className="border-secondary" label="" />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </FormGroup>
                </Col>
                <Col sm={12} md={12} className="mb-3 mb-md-0">
                    <Form.Group className="mb-3 mt-0 mt-md-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className="pt-4" as="textarea" rows="7" placeholder="Tell us all about it...." />
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
