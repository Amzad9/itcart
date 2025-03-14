import React from 'react';
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import Logo from '../assets/mongodb.png';
import Logo1 from '../assets/logo-docker.png';
import Logo2 from '../assets/logo-figma.png';
import Logo3 from '../assets/logo-react.png';
import Logo4 from '../assets/logo-github.png';

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
    <section className="mt-5 py-5">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full lg:w-7/12">
            <Slider {...CLIENTS_SLIDER_SETTINGS}>
              {client.map((items, index) => (
                <div key={index} className="flex justify-center">
                  <img className="m-auto img-fluid" src={items.img} alt={`client-logo-${index}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
