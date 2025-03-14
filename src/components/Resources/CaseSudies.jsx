import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import NewHeader from './NewHeader';
import Slider from "react-slick";
import Case from '../assets/cases.png';
import NextArrow from '../Client/NextArrow';
import PrevArrow from '../Client/PrevArrow';
import './Resources.scss'
function CaseSudies() {

    const CLIENTS_SLIDER_SETTINGS = {
        dots: false,
        arrows: true,
        infinite: false,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1023,
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
        <>

            <Container fluid="xxl" className="resources-section case-studies rounded-8 bg-resource py-5 pb-md-6 pt-md-5 px-md-7 px-3 mb-md-7 mb-4">
                <Row className='mb-4'>
                    <Col>
                        <h2>Stories that inspire!</h2>
                        <p className='text-center'>A Transformative study showcasing the journey of a company with IT Cart!</p>
                    </Col>
                </Row>
                
                <Slider {...CLIENTS_SLIDER_SETTINGS}>
                <Row>
                        <Col sm={12} md={12}>
                            <NewHeader title="StrategiQ Chose IT Cart’s Work Management Platform to Underpin Growth Ambitions" />
                            <p className='mt-5'>StrategiQ is a full-service digital marketing agency with 50 employees spread across multiple locations in the UK. Founded in 2013, they’re helping companies connect business objectives with marketing strategies that deliver measurable results.</p>
                            <p className='mt-4'>In 2020 Tyler Webb-Harding, StrategiQ’s Operations Director identified a problem – that the teams’ existing project management tools would not scale with the company’s ambitious growth plans.</p>
                            <p>Their tools only provided coarse metrics, such as how time was spent and if projects were completed.</p>
                        </Col>
                        <Col sm={12} md={12} className="py-4">
                            <Row className='justify-content-center'>
                                <Col sm={12} md={7}>
                                    <img src={Case} className='img-fluid' alt="" />
                                    <h6 className="avter-title mt-3">Tyler Webb-Harding, StrategiQ’s Operations Director</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} className='pt-4'>
                            <p>  Scoro also took Gold as The Employer of the Year award in 2021. This accolade recognized Scoro as an organization that has created a stimulating and supportive work environment and has a real commitment to the welfare of its employees.

                                This resulted in high staff satisfaction levels and a well-motivated, ambitious and integrated workforce. Scoro, by putting its people at the center of its business, has firmly established itself as a tech employer of choice, all while expanding internationally at ‘rocket-ship’ speed.</p>

                        </Col>
                        <Col sm={12} className="py-3">
                            <h2 className='mb-5 text-start'>Agency needs and wants</h2>
                            <p>The StrategiQ Operations team wanted full visibility of every task, as well as the ability to send and track purchase orders, invoices, communications, and meetings, all in one platform.</p>
                            <p>While the key requirement for StrategiQ’s Leadership team was to have a more effective way to track business metrics and create reports.</p>
                            <p>As a result, Webb-Harding began searching for a fully end-to-end work management solution that could cater to the unique needs of a rapidly growing mid-sized marketing agency.</p>
                            <p>Of the more than 20 tools which StrategiQ considered, only Scoro was able to deliver the level of reporting and data tracking needed to fuel the agency’s growth.</p>
                            <h2 className='my-5 text-start'>Tracking Project Profitability and Utilization with IT Cart</h2>
                            <p>Having selected and deployed Scoro, StrategiQ is now able to drive efficiency by tracking key data on:</p>
                            <ul>
                                <li>Time spent on projects</li>
                                <li>Time spent in meetings</li>
                                <li>Project profitability</li>
                                <li>Resource utilization</li>
                            </ul>
                            <h4>Enabling Remote Work for Agencies with IT Cart</h4>
                            <p>One business challenge which StrategiQ couldn’t have anticipated was the announcement of a national COVID-19 lockdown just two days after rolling Scoro out internally. Suddenly, the entire agency landscape changed overnight.</p>
                            <h4 className='fw-semibold col-12 col-md-7 m-auto mt-5'>“The pandemic made people work in a different way. Everybody is now working from home, and it’s changed how clients expect to work with us too.” – Tyler Webb-Harding, StrategiQ’s Operations Director</h4>
                            <p className="mt-5">But Scoro supported the team in adapting to this challenge by enabling employees to continue tracking time and collaborating on projects in real-time. Additionally, Scoro centralized key business data into one location so that projects can proceed more efficiently.</p>

                        </Col>


                    </Row>
                    <Row>
                        <Col sm={12} md={12}>
                            <NewHeader title="StrategiQ Chose IT Cart’s Work Management Platform to Underpin Growth Ambitions" />
                            <p className='mt-5'>StrategiQ is a full-service digital marketing agency with 50 employees spread across multiple locations in the UK. Founded in 2013, they’re helping companies connect business objectives with marketing strategies that deliver measurable results.</p>
                            <p className='mt-4'>In 2020 Tyler Webb-Harding, StrategiQ’s Operations Director identified a problem – that the teams’ existing project management tools would not scale with the company’s ambitious growth plans.</p>
                            <p>Their tools only provided coarse metrics, such as how time was spent and if projects were completed.</p>
                        </Col>
                        <Col sm={12} md={12} className="py-4">
                            <Row className='justify-content-center'>
                                <Col sm={12} md={7}>
                                    <img src={Case} className='img-fluid' alt="" />
                                    <h6 className="avter-title mt-3">Tyler Webb-Harding, StrategiQ’s Operations Director</h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={12} className='pt-4'>
                            <p>  Scoro also took Gold as The Employer of the Year award in 2021. This accolade recognized Scoro as an organization that has created a stimulating and supportive work environment and has a real commitment to the welfare of its employees.

                                This resulted in high staff satisfaction levels and a well-motivated, ambitious and integrated workforce. Scoro, by putting its people at the center of its business, has firmly established itself as a tech employer of choice, all while expanding internationally at ‘rocket-ship’ speed.</p>

                        </Col>
                        <Col sm={12} className="py-3">
                            <h2 className='mb-5 text-start'>Agency needs and wants</h2>
                            <p>The StrategiQ Operations team wanted full visibility of every task, as well as the ability to send and track purchase orders, invoices, communications, and meetings, all in one platform.</p>
                            <p>While the key requirement for StrategiQ’s Leadership team was to have a more effective way to track business metrics and create reports.</p>
                            <p>As a result, Webb-Harding began searching for a fully end-to-end work management solution that could cater to the unique needs of a rapidly growing mid-sized marketing agency.</p>
                            <p>Of the more than 20 tools which StrategiQ considered, only Scoro was able to deliver the level of reporting and data tracking needed to fuel the agency’s growth.</p>
                            <h2 className='my-5 text-start'>Tracking Project Profitability and Utilization with IT Cart</h2>
                            <p>Having selected and deployed Scoro, StrategiQ is now able to drive efficiency by tracking key data on:</p>
                            <ul>
                                <li>Time spent on projects</li>
                                <li>Time spent in meetings</li>
                                <li>Project profitability</li>
                                <li>Resource utilization</li>
                            </ul>
                            <h4>Enabling Remote Work for Agencies with IT Cart</h4>
                            <p>One business challenge which StrategiQ couldn’t have anticipated was the announcement of a national COVID-19 lockdown just two days after rolling Scoro out internally. Suddenly, the entire agency landscape changed overnight.</p>
                            <h4 className='fw-semibold col-12 col-md-7 m-auto mt-5'>“The pandemic made people work in a different way. Everybody is now working from home, and it’s changed how clients expect to work with us too.” – Tyler Webb-Harding, StrategiQ’s Operations Director</h4>
                            <p className="mt-5">But Scoro supported the team in adapting to this challenge by enabling employees to continue tracking time and collaborating on projects in real-time. Additionally, Scoro centralized key business data into one location so that projects can proceed more efficiently.</p>

                        </Col>


                    </Row>
                </Slider>
            </Container>
        </>
    )
}

export default CaseSudies
