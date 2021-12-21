import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import { ResourcesData } from '../Utility'
import CommonTab from '../Careers/CommonTab'
import Masonry from 'react-masonry-css'
import './Resources.scss'
function Resources() {

    const [index, setIndex] = useState(0)
    const handle = (e) => {
        setIndex(e)
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (
        <>
            <Banner
                subtitle='Make Your Work Efficient With'
                title='Resources'
                bodytext='Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text' />

            <section>
                <Container className="bg-primary-light" fluid>
                    <Row>
                        <Col md={12} className="py-5">
                            <CommonTab careerData={ResourcesData} onClick={handle} activeTab="Students and garduates" />
                        </Col>
                    </Row>

                </Container>
                <Container fluid="xxl" className="resources-section">
                    <Row>
                        <Col xs={12} md={12} className="text-center py-5">
                            <h4>Find jobs at iT Cart that match ur skillset</h4>
                            <p className="col-12 col-md-5 m-auto my-4">Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody </p>
                            <Button variant="outline-primary fw-semibold px-4">Get Started</Button>
                        </Col>
                    </Row>
                    {index === 0 ?
                        <Row>
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                            >
                                <div>This is a longer card with supporting text below as a natural lead-in to additional conle bit longer.</div>
                                <div>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                                <div>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                                <div>This is a longer card with supporting text below as a natural lead-in to a This content is a little bit longer.</div>
                                <div>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                                <div>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                                <div>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                                <div>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</div>
                            </Masonry>

                        </Row>
                        : index === 1 ?
                            <Row id="customer">
                                <Col xs={12} md={6}>
                                    <SlideCard className="box-shadow-sm p-4">
                                        <p>A well-known quote, contained in a blockquote element.Someone famous in Source Title</p>
                                    </SlideCard>
                                </Col>

                            </Row>
                            : index === 2 ?
                                <Row>
                                    3
                                </Row>
                                : index === 3 ?
                                    <Row>
                                        4
                                    </Row>
                                    : null}
                </Container>

            </section>
            <section className="pb-5 pt-7">
                <Container>
                    <Row>
                        <Col className="mb-5">
                            <h2>Follow Our</h2>
                        </Col>
                    </Row>
                    <Row className="gx-10">
                        <Col xs={12} md={4} >
                            <SlideCard className="box-shadow-sm p-3 text-center">
                                <h4 className="mb-5">WEBINARS</h4>
                                <Button variant="outline-primary fw-semibold px-4">Know More</Button>
                            </SlideCard>
                        </Col>
                        <Col xs={12} md={4} >
                            <SlideCard className="box-shadow-sm p-3 text-center">
                                <h4 className="mb-5">NEWS</h4>
                                <Button variant="outline-primary fw-semibold px-4">Know More</Button>
                            </SlideCard>
                        </Col>
                        <Col xs={12} md={4} >
                            <SlideCard className="box-shadow-sm p-3 text-center">
                                <h4 className="mb-5">HELP CENTER</h4>
                                <Button variant="outline-primary fw-semibold px-4">Know More</Button>
                            </SlideCard>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Resources
