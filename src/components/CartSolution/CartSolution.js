import React, { useState } from 'react'
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import { SolutionData } from '../Utility'
import Hrms from './Hrms';
import Eservice from './Eservice';
import Mis from './Mis';
import Enterprise from './Enterprise';
import CommonTab from '../Careers/CommonTab'
import Blog from '../Blog/Blog'
import '../Careers/CommonTab.scss';
import PeopleSay from '../PeopleSay/PeopleSay'


function CartSolution() {

    const [index, setIndex] = useState(0)
    const handle = (e) => {
        setIndex(e)
    }
    return (
        <>
            <Banner
                className='bg-light8'
                subtitle='Did you Digitally Streamline your Business?'
                title='Our Solutions'
                bodytext="Don't worry, IT Cart does it for you!
            We cover that extra mile to ensure your technology needs are meet with the best in the class expertise, services & support!" />

            <section>
                <Container className="tabs-container" fluid>
                    <Row>
                        <Col md={12} className="">
                            <CommonTab careerData={SolutionData} onClick={handle} activeTab="Web Development" />
                        </Col>
                    </Row>
                </Container>

                <div className="career-section">

                    {index === 0 ?
                        <Hrms />
                        : index === 1 ?
                            <Eservice />
                            : index === 2 ?
                                <Mis />
                                : index === 3 ?
                                    <Enterprise />
                                    : null}
                </div>

            </section>

            <PeopleSay />

        </>
    )
}

export default CartSolution
