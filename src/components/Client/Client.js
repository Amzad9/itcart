import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import Logo from '../assets/mongodb.png';
import Logo1 from '../assets/logo-docker.png';
import Logo2 from '../assets/logo-figma.png';
import Logo3 from '../assets/logo-react.png';
import Logo4 from '../assets/logo-github.png';


import './Client.scss'




const Client = () => {
  const CLIENTS_SLIDER_SETTINGS = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]

  };
  const client = [
    { img: Logo },
    { img: Logo1 },
    { img: Logo2 },
    { img: Logo3 },
    { img: Logo4 },
    { img: Logo },
    { img: Logo1 }
  ];

  return (
    <section className="clients mt-5 py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={12} md={11} xxl={7}>
            <Slider {...CLIENTS_SLIDER_SETTINGS}>
              {client.map(items => (
                <div>
                  <img className="d-block m-auto img-fluid" src={items.img} alt={items} />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Client
