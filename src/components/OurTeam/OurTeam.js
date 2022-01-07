import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import ContactUs from '../ContactUs/ContactUs';
import Team1 from '../assets/team1.png';
import Team2 from '../assets/team2.png';

function OurTeam() {

  const [index, setIndex] = useState(0)
  const handle = (e) => {
    setIndex(e)
  }
  return (
    <>
      <Banner
        className="bg-light6"
        subtitle='Make Your Work Efficient With'
        title='Our Team'
        bodytext='Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text' />


      <section className="pb-5 pt-6">
        <Container className='bg-light6 px-6 pt-5 pb-7 rounded-8' fluid="xxl">
          <Row className="gx-9 mb-5">
            <Col>
              <h2>Our Leadership Team</h2>
            </Col>
          </Row>
          <Row className="gx-9">
            <Col xs={12} md={4} >
              <SlideCard classBody="p-0" className="box-shadow-sm text-start">
                <img src={Team1} alt="" className="img-fluid" />
               
                <div className='py-3 px-3'>
                  <h5 className="text-primary mb-1">Siraj uddin </h5>
                  <p className='mb-0'>Chief Executive Officer</p>
                </div>
              </SlideCard>
            </Col>
            <Col xs={12} md={4} >
              <SlideCard classBody="p-0" className="box-shadow-sm text-start">
                <img src={Team1} alt="" className="img-fluid" />
                <div className='py-3 px-3'>
                  <h5 className="text-primary mb-1">Rohim uddin </h5>
                  <p className='mb-0'>Chief Technology Officer</p>
                </div>
              </SlideCard>
            </Col>
            <Col xs={12} md={4} >
              <SlideCard classBody="p-0" className="box-shadow-sm text-start">
                <img src={Team1} alt="" className="img-fluid" />
                <div className='py-3 px-3'>
                  <h5 className="text-primary mb-1">Rohim uddin</h5>
                  <p className='mb-0'>Chief Technology Officer</p>
                </div>
              </SlideCard>
            </Col>

          </Row>
          <Row className="justify-content-center mt-7 gx-9">
            <Col xs={12} md={4} >
              <SlideCard classBody="p-0" className="box-shadow-sm text-start">
                <img src={Team1} alt="" className="img-fluid" />
                <div className='py-3 px-3'>
                  <h5 className="text-primary mb-1">Siraj uddin </h5>
                  <p className='mb-0'>Chief Executive Officer</p>
                </div>
              </SlideCard>
            </Col>
            <Col xs={12} md={4} >
              <SlideCard classBody="p-0" className="box-shadow-sm text-start">
                <img src={Team1} alt="" className="img-fluid" />
                <div className='py-3 px-3'>
                  <h5 className="text-primary mb-1">Rohim uddin</h5>
                  <p className='mb-0'>Chief Technology Officer</p>
                </div>
              </SlideCard>
            </Col>

            <Col xs={12} md={4} >
              <SlideCard classBody="p-0" className="box-shadow-sm text-start">
                <img src={Team1} alt="" className="img-fluid" />
                <div className='py-3 px-3'>
                  <h5 className="text-primary mb-1">Rohim uddin </h5>
                  <p className='mb-0'>Chief Technology Officer</p>
                </div>
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
