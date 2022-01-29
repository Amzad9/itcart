import React, { useEffect, useState } from 'react'
import { Row, Col, Form, FormGroup, Dropdown } from 'react-bootstrap';
import './FormControl.scss';
function FormControl() {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone:"",
        message: "",
        company: ""
    })
    const[employees,setEmployees] = useState([]);
    const[selectedEmployees,setSelectedEmployees] = useState([]);


    
    const { name, email,phone, message, company, } = data;

    const handleChange = e => {
        
        setData({ ...data, [e.target.name]: e.target.value })
    }



    const handleSubmit = async e => {
       
        e.preventDefault()
          if(name !== "" && phone !== "" && company !== ""){
            try {
                await fetch("https://v1.nocodeapi.com/shadab/google_sheets/MwiXzprYYAROCodp?tabId=Sheet1", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify([[name, email, phone, message,company]]),
                    success: function(response, data){
                       console.log(data.message)
                    }
                })
                alert("successfully")
            } catch (err) {
                console.log(err)
                alert("Not successfully")
            } 
          }else{
            alert('Please fill the details')
          }
        
    }


   useEffect( () => {
    const employeesData = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Roy' },
        { id: 3, name: 'Albert' }
      ]
      setEmployees({employeesData});
   })

    return (
       
        <form onSubmit={handleSubmit} >
            <Row>
                <Col sm={12} md={12} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="text" placeholder="Name*" className="mb-2" 
                   name='name' value={name} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0 pb-4">
                    <Form.Control type="email" placeholder="E-email*" className="mb-2" 
                  name='email' value={email} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="tel" placeholder="Phone" className="mb-2" 
                 name='phone' value={phone}  onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
                    <Form.Control type="text" placeholder="Company’s Name" className="mb-2" 
                 name="company" value={company}  onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mb-3 mb-md-0">
               
                    <FormGroup>

                        <Dropdown className="emp-drop" onChange={handleChange} multiple >
                            <Dropdown.Toggle variant="" className="form-control" id="dropdown-basic">
                                Size of your company
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="p-0 form-control">
                                <Dropdown.Item href="#/action-1" >0</Dropdown.Item>
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
                    <button type="submit" className="btn btn-outline-secondary py-3 px-4 bg-secondary text-white fs-6 fw-semibold rounded-4 btn-form">Send Message</button>
                </Col>
            </Row>
        </form>
    )
}

export default FormControl
