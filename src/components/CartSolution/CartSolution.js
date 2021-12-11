import React, {useState} from 'react'
import { Container, Row, Col, Button, Nav} from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import {Solution} from '../Utility'
import CommonTab from '../Careers/CommonTab'
import Blog from '../Blog/Blog'

function CartSolution() {

    const [index, setIndex] = useState(0)
    const  handle = (e) => {
        setIndex(e)
    }
    return (
        <>
           <Banner 
            subtitle='Make Your Work Efficient With' 
            title ='It Cart Solutions' 
            bodytext='Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text' />
           
            <section>
                 <Container className="bg-primary-light" fluid>
                    <Row>
                        <Col md={12} className="py-5">
                                <CommonTab careerData={Solution} onClick={handle} activeTab="Students and garduates" />
                        </Col>
                    </Row>
                    
                </Container>
                <div  className="career-section">
                   
                {index === 0 ? 
                <div>
                    <section className="bg-light2 py-5">
                      <Container fluid="xxl">
                        <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>Product 1</h2>
                                
                            </Col>
                         </Row>
                         <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-6">
                           <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={12} className="pt-5">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                       </Container>
                    </section>
                    <section className="bg-light3 py-5">
                    <Container fluid="xxl">
                      <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>Product 2</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-6">
                           <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={12} className="pt-5">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section className="bg-light4 py-5">
                    <Container fluid="xxl">
                      <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>Product 3</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-5">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                     
                    </div>
                   : index === 1 ?
                      <Container>
                          
                        <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>Product 2</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center mt-6">
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text</p>
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col md={12} className="pt-5">
                                <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                   
                      </Container>
                   : index === 2 ?
                        <Row>
                            <Col  xs={12} md={6}>
                          
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                        </Row>
                    : index === 3 ?
                        <Row>
                            <Col  xs={12} md={6}>
                          
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                        </Row>
                    : null}
                </div>
               
            </section>
            <section className="bg-light5 py-5">
                    <Container fluid="xxl">
                       <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>Integrations</h2>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col  xs={12} md={6} className="ps-5">
                                <h4>Make Your Work Efficient With</h4>
                                <ul className="list">
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                    <li>Body text body text body textbody textbody textbody </li>
                                </ul>
                            </Col>
                            <Col  xs={12} md={6}>
                                <SlideCard className="box-shadow-sm p-4">
                                
                                </SlideCard>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-5">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <section className="bg-light5 py-5">
                    <Container fluid="xxl">
                       <Row>
                            <Col xs={12} md={12} className="text-center py-5">
                                <h2>See Our Packages</h2>
                                <h4>Enterprise ready</h4>
                                
                            </Col>
                        </Row>
                        <Row className="align-items-center justify-content-between">
                            <Col  xs={12} md={3} className="text-center">
                                 <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                               
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            
                        </Row>
                        <Row className="align-items-center justify-content-between">
                            <Col  xs={12} md={3} className="text-center">
                                 <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                               
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            <Col  xs={12} md={3} className="text-center">
                            <SlideCard className="box-shadow-sm p-4 mb-5">
                                
                                </SlideCard>
                                <p>Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            </Col>
                            
                        </Row>
                       
                        <Row>
                            <Col md={12} className="pt-5">
                               <Nav.Link className="fs-6 text-dark text-center">SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i></Nav.Link>
                            </Col>
                        </Row>
                      </Container>
                    </section>
                    <Blog />
           
        </>
    )
}

export default CartSolution
