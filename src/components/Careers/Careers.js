import React, {useState} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import {careerData} from '../Utility'
import CommonTab from './CommonTab'
function Careers() {

    const [index, setIndex] = useState(0)
    const  handle = (e) => {
        setIndex(e)
    }
    return (
        <>
           <Banner 
            subtitle='Make Your Work Efficient With' 
            title ='Careers' 
            bodytext='Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text' />
           
            <section>
                 <Container className="bg-primary-light" fluid>
                    <Row>
                        <Col md={12} className="py-5">
                                <CommonTab careerData={careerData} onClick={handle} activeTab="Students and garduates" />
                        </Col>
                    </Row>
                    
                </Container>
                <Container fluid="xxl" className="career-section">
                    <Row>
                        <Col xs={12} md={12} className="text-center py-5">
                            <h4>Find jobs at iT Cart that match ur skillset</h4>
                            <p className="col-12 col-md-5 m-auto my-4">Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            <Button variant="outline-primary fw-semibold px-4">Get Started</Button>
                        </Col>
                    </Row>
                {index === 0 ? 
                        <Row>
                          <Col  xs={12} md={6}>
                             <SlideCard className="box-shadow-sm p-4">
                                <h4 className="mb-5">Key to iT Cart’s success? Our People</h4> 
                                <Button variant="outline-primary fw-semibold px-4">Employees stories</Button>
                             </SlideCard>
                          </Col>
                          <Col  xs={12} md={6}>
                             <SlideCard className="box-shadow-sm p-4 text-end">
                                <h4 className="mb-5">Key to iT Cart’s success? Our People</h4> 
                                <Button variant="outline-primary fw-semibold px-4">Learn More about us</Button>
                             </SlideCard>
                          </Col>
                        </Row>
                   : index === 1 ?
                    <Row>
                    2
                    </Row>
                   : index === 2 ?
                    <Row>
                    3
                    </Row>
                    : index === 3 ?
                    <Row>
                        4
                    </Row>
                    : null}
                </Container>
               
            </section>
        </>
    )
}

export default Careers
