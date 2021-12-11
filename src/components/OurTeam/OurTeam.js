import React, {useState} from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import ContactUs from '../ContactUs/ContactUs';
import Team1 from '../assets/team1.png';
import Team2 from '../assets/team2.png';

function OurTeam() {

    const [index, setIndex] = useState(0)
    const  handle = (e) => {
        setIndex(e)
    }
    return (
        <>
           <Banner 
            subtitle='Make Your Work Efficient With' 
            title ='Our Team' 
            bodytext='Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text' />
           
          
            <section className="pb-5 pt-7">
              <Container>
                  
                  <Row>
                      <Col xs={12} md={3} >
                        <SlideCard className="box-shadow-sm text-center">
                          <img src={Team1} alt="" className="img-fluid" />
                        </SlideCard>
                      </Col>
                      <Col xs={12} md={3} >
                        <SlideCard className="box-shadow-sm  text-center">
                          <img src={Team1} alt="" className="img-fluid"/>
                        </SlideCard>
                      </Col>
                      <Col xs={12} md={3} >
                        <SlideCard className="box-shadow-sm  text-center">
                          <img src={Team2} alt="" className="img-fluid"/>
                        </SlideCard>
                      </Col>
                      <Col xs={12} md={3} >
                        <SlideCard className="box-shadow-sm text-center">
                        <img src={Team1} alt="" className="img-fluid"/>
                        </SlideCard>
                      </Col>
                  </Row>
                  <Row className="justify-content-center mt-7">
                      <Col xs={12} md={3} >
                        <SlideCard className="box-shadow-sm text-center">
                          <img src={Team2} alt="" className="img-fluid" />
                        </SlideCard>
                      </Col>
                      <Col xs={12} md={3} >
                        <SlideCard className="box-shadow-sm  text-center">
                          <img src={Team1} alt="" className="img-fluid"/>
                        </SlideCard>
                      </Col>
                      <Col xs={12} md={3} >
                        <SlideCard className="box-shadow-sm  text-center">
                          <img src={Team2} alt="" className="img-fluid"/>
                        </SlideCard>
                      </Col>
                     
                  </Row>
              </Container>
            </section>
            <ContactUs />
        </>
    )
}

export default OurTeam
