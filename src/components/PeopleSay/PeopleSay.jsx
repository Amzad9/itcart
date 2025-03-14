import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import SlideCard from '../Card/SlideCard';
import NextArrow from '../Client/NextArrow';
import PrevArrow from '../Client/PrevArrow';
import styles from './PeopleSay.module.css'; // Import CSS Module
import Union from '../assets/Union.png';

const PeopleSay = () => {

  const SERVICE_SLIDER_SETTINGS = {
    dots: false,
    arrows: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
    <section className="py-5">
      <Container fluid="xxl" className="bg-service rounded-8 px-0 px-md-6 pt-5 pb-4">
        <Row className="mx-0">
          <Col md="12" className="text-center">
            <h2>What People Say</h2>
          </Col>
        </Row>

        <Row className="mx-0">
          <Col md={12}>
            <Slider {...SERVICE_SLIDER_SETTINGS}>
              <SlideCard className="bg-white p-0 border-0">
                <Row className="align-items-start mx-0">
                  <Col sm={12} md={4} className="p-3">
                    <img src={Union} alt="Union" className={styles.cardImage} />
                  </Col>
                  <Col sm={12} md={8}>
                    <p className={`mb-md-5 mb-3 pt-3 pe-md-5 pe-3 ${styles.cardText}`}>
                      “We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.”
                    </p>
                    <h4 className={`${styles.cardTitle} mb-1`}>Attila Probáld, CEO</h4>
                    <p>feat. Agency</p>
                  </Col>
                </Row>
              </SlideCard>
              <SlideCard className="bg-white p-0 border-0">
                <Row className="align-items-start mx-0">
                  <Col sm={12} md={4} className="p-3">
                    <img src={Union} alt="Union" className={styles.cardImage} />
                  </Col>
                  <Col sm={12} md={8} className="px-3 px-md-0">
                    <p className={`mb-md-5 mb-3 pt-3 pe-md-5 pe-3 ${styles.cardText}`}>
                      “We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.”
                    </p>
                    <h4 className={`${styles.cardTitle} mb-1`}>Attila Probáld, CEO</h4>
                    <p>feat. Agency</p>
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
  );
};

export default PeopleSay;
