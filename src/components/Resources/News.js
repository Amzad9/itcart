import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import NewHeader from './NewHeader';
import BusinesAward from '../assets/Busines-award.png';
import './Resources.scss'
function News() {
    return (
        <>
            <Container fluid="xxl" className="rounded-8 bg-resource py-5 py-md-6 px-md-5 px-3">
                <Row>
                    <Col sm={12} md={6}>
                        <NewHeader title="IT Cart Wins Two Business Brilliance Awards" />
                        <h6 className='fw-semibold text-dark mt-5'>SaaS Work Management scale-up wins International Business of the Year and Employer of the Year accolades.</h6>
                        <p className='fw-500 text-dark mt-4'>Scoro was recognized as The International Business of the Year 2021 at the Business Brilliance Awards in London. Scoro was judged to have achieved the most impressive overall business performance internationally: in 2021, Scoro moved its HQ from Estonia to London to facilitate its aggressive international growth agenda and was subsequently rewarded with rapid expansion in its target markets (UK, North America and Australia).</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src={BusinesAward} className='img-fluid' alt="" />
                    </Col>
                    <Col sm={12} className='pt-4'>
                        <p>  Scoro also took Gold as The Employer of the Year award in 2021. This accolade recognized Scoro as an organization that has created a stimulating and supportive work environment and has a real commitment to the welfare of its employees.

                            This resulted in high staff satisfaction levels and a well-motivated, ambitious and integrated workforce. Scoro, by putting its people at the center of its business, has firmly established itself as a tech employer of choice, all while expanding internationally at ‘rocket-ship’ speed.</p>

                    </Col>
                    <Col sm={12} className="py-3 text-end">
                        <a href="#" className='text-decoration-none text-primary'>READ MORE <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.11735L1.07033 0L10 8.82489L18.9297 0L20 1.11735L10 11L0 1.11735Z" fill="#E86275" />
                        </svg>
                        </a>
                    </Col>

                </Row>
            </Container>
            <Container fluid="xxl" className="resources-section rounded-8 bg-contact py-6 px-md-5 px-3 mt-5">
                <Row>

                    <Col sm={12} md={6}>
                        <img src={BusinesAward} className='img-fluid' alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <NewHeader title="Life in Scoro: Story of a Customer Success Intern"/>
                        <h6 className='fw-semibold text-dark mt-5'>SaaS Work Management scale-up wins International Business of the Year and Employer of the Year accolades.</h6>
                        <p className='fw-500 text-dark mt-4'>Over the years, we’ve shared stories about Scoro’s company culture, given tips on recruiting world-class talent, and explained how we use Scoro to manage daily work. Now, we’ve decided to raise the curtain again and talk a bit more about our life in Scoro.</p>
                        <p>We kicked this series off with our VP of Sales, who spoke about the life in our Sales Team. This time, we’ve asked our Customer Success intern to share his story.</p>
                    </Col>
                    <Col sm={12} className='pt-4'>
                        <p> It was April 2021, Europe was going through a major lockdown and people were forced into their homes. That’s when Markus Wünsche, a bachelor student from the south of Germany, decided to move to Estonia and start his internship as a Customer Success Specialist in Scoro. </p>
                        <p>Continue reading to find out:</p>
                        <ul>
                            <li>why Markus came to Estonia and what attracted him to Scoro</li>
                            <li>what were his tasks as an intern</li>
                            <li>how did he enjoy his internship at Scoro</li>
                            <li>A business administration student with a passion for motorsport</li>
                            <li>Coming from a small town in the south of Germany, Markus has always been interested in technology and business. Therefore, moving to Stuttgart to do his bachelor’s degree in technically oriented business administration seemed like a logical step. The main focus of his studies was innovation, international management and business information systems.</li>
                        </ul>
                        <p>Apart from studying, he’s passionate about sports, especially motorsport. In the university, he was a member of the race team, carrying some management and financial responsibilities and being the race car driver.</p>
                        <p>From Stuttgart to Tallinn, from customer to a full-time Scorer
                            During his studies, Markus worked as a business analyst in a startup company that needed a new work management software. As he was interested in process management and business software, he was assigned to find and implement an appropriate solution for the whole team of around 20 people. That’s how he found Scoro!
                        </p>
                        <p>“I was convinced by the product of Scoro and was in contact with some inspiring people working there. At the end of the sales phase, I asked if Scoro would be open for an internship,” explains Markus. </p>
                        <p>
                            After several video calls with the Onboarding team and communication with the recruiters, Markus found himself on the plane to Tallinn, excited for this new challenge.</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid="xxl" className="resources-section rounded-8 bg-service py-6 px-md-5 px-3 my-5">
                <Row>
                    <Col sm={12} md={6}>
                        <NewHeader title="IT Cart Wins Two Business Brilliance Awards"/>
                        <h6 className='fw-semibold text-dark mt-5'>SaaS Work Management scale-up wins International Business of the Year and Employer of the Year accolades.</h6>
                        <p className='fw-500 text-dark mt-4'>Scoro was recognized as The International Business of the Year 2021 at the Business Brilliance Awards in London. Scoro was judged to have achieved the most impressive overall business performance internationally: in 2021, Scoro moved its HQ from Estonia to London to facilitate its aggressive international growth agenda and was subsequently rewarded with rapid expansion in its target markets (UK, North America and Australia).</p>
                    </Col>
                    <Col sm={12} md={6}>
                        <img src={BusinesAward} className='img-fluid' alt="" />
                    </Col>
                    <Col sm={12} className='pt-4'>
                        <p>  Scoro also took Gold as The Employer of the Year award in 2021. This accolade recognized Scoro as an organization that has created a stimulating and supportive work environment and has a real commitment to the welfare of its employees.

                            This resulted in high staff satisfaction levels and a well-motivated, ambitious and integrated workforce. Scoro, by putting its people at the center of its business, has firmly established itself as a tech employer of choice, all while expanding internationally at ‘rocket-ship’ speed.</p>

                    </Col>
                    <Col sm={12} className="py-3 text-end">
                        <a href="#" className='text-decoration-none text-primary'>READ MORE <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.11735L1.07033 0L10 8.82489L18.9297 0L20 1.11735L10 11L0 1.11735Z" fill="#E86275" />
                        </svg>
                        </a>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default News
