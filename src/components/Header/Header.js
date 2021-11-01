import React from 'react';
import Slider from "react-slick";
import { Container, Row, Col} from 'react-bootstrap';
import SliderContent from './SliderContent';
import Button from '../Button/button';
import {SLIDER_DATA, Header_SLIDER_SETTINGS} from '../Utility';
import './Header.scss';

function Header() {
    return (
        <header>
            <Container fluid="xxl">
                <Row>
                  <Col sm={12} md={12}>
                       <Slider {...Header_SLIDER_SETTINGS}>
                            
                                {SLIDER_DATA.map( item => (
                                    <SliderContent className="slide-1 mx-0" title={item.title} subtitle={item.subtitle}>
                                        <Button className="text-white">Explore</Button>
                                    </SliderContent>
                                ))}
                        </Slider>
                  </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
