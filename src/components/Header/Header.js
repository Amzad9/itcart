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
            <Container fluid>
                <Row>
                  <Col sm={12} md={12} lg={12}>
                       <Slider {...Header_SLIDER_SETTINGS}>
                            
                                {SLIDER_DATA.map( (item, index) => (
                                    <SliderContent className={"mx-0 slide-" + index } title={item.title} subtitle={item.subtitle}>
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
