import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import SlideCard from '../Card/SlideCard';
import NextArrow from '../Client/NextArrow';
import PrevArrow from '../Client/PrevArrow';
import '../Client/Client.scss'
import './PeopleSay.scss'
import Union from '../assets/Union.png';


// import ScrollAnimation from 'react-animate-on-scroll';
{/* <ScrollAnimation animateIn="fadeIn">
               Some Text
            </ScrollAnimation> */}

const PeopleSay = () => {




  const SERVICE_SLIDER_SETTINGS = {
    dots: false,
    arrows: true,
    // infinite: true,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };



 

  return (
    <section className="clients  PeopleSay py-5">
      <Container fluid="xxl" className="bg-service rounded-8 px-0 px-md-6 pt-5 pb-4">
        <Row className="mx-0">
          <Col classNAme="text-center" md="12">
            <h2>What People Say</h2>
          </Col>
        </Row>


        <Row className="mx-0">
          <Col md={12}>

            <Slider {...SERVICE_SLIDER_SETTINGS}>

              <SlideCard classBody="pb-0 p-0" className="bg-white p-0 border-0">
                <Row className="align-items-start mx-0">
                  <Col sm={12} md={4} className="p-3">
                    <img src={Union} alt="" />
                  </Col>
                  <Col sm={12} md={8} className="">
                    <p className="mb-md-5 mb-3 pt-3 pe-md-5 pe-3 pe-md-0">???We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.???</p>
                    <h4 className="mb-1">Attila Prob??ld, CEO</h4>
                    <p className="">feat. Agency</p>
                  </Col>

                </Row>

              </SlideCard>
              <SlideCard classBody="pb-0 p-0" className="bg-white p-0 border-0">
                <Row className="align-items-start mx-0">
                  <Col sm={12} md={4} className="p-3">
                    <img src={Union} alt="" />
                  </Col>
                  <Col sm={12} md={8} className="px-3 px-md-0">
                    <p className="mb-md-5 mb-3 pt-3 pe-md-5 pe-3">???We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.???</p>
                    <h4 className="mb-1">Attila Prob??ld, CEO</h4>
                    <p className="">feat. Agency</p>
                  </Col>

                </Row>

              </SlideCard>

            </Slider>

          </Col>
        </Row>
        <Row>
          <Col md={12} className="pt-4">
            <Nav.Link className="fs-6 text-blue text-center">READ MORE <i className="bi bi-arrow-right"></i></Nav.Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PeopleSay
