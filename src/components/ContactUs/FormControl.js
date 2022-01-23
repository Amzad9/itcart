import React,{useState} from 'react'
import { Row, Col, Form, FormGroup, Dropdown } from 'react-bootstrap';
import Button from '../Button/button';
import './FormControl.scss'
import emailjs  from 'emailjs-com';
function FormControl() {

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
      });
      const onSubmit = (e) => {
          console.log('hi')
        e.preventDefault();
        emailjs.sendForm(
          'gmail',
          'template_gueeoij',
          toSend,
          'user_NfXT8TFpbPyHOvVNDEwsP'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };
      const handleChange = (e) => {
          console.log({...toSend})
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <form onSubmit={onSubmit } >
            <Row>
                <Col sm={12} md={12} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="text" placeholder="Name*" className="mb-2" 
                   name="name" value={toSend.name} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="email" placeholder="E-email*" className="mb-2" 
                  name="email" value={toSend.email} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="tel" placeholder="Phone" className="mb-2" 
                 name="phone" value={toSend.phone}  onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="text" placeholder="Company’s Name" className="mb-2" 
                 name="company" value={toSend.company}  onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <FormGroup>
                       
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
                    <Button variant="outline-secondary" type="submit"  className="py-3 px-4 bg-secondary text-white fs-6 fw-semibold rounded-4 btn-form">Send Message</Button>
                </Col>
            </Row>
        </form>
    )
}

export default FormControl
