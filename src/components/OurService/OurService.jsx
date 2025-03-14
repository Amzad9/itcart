import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import Banner from '../banner/Banner';
import { Solution } from '../Utility'
import CommonTab from '../Careers/CommonTab'
import PeopleSay from '../PeopleSay/PeopleSay'
import Web from './Web';
import ServiceApp from './ServiceApp';
import Business from './Business';
import Technology from './Technology';
import '../Careers/CommonTab.scss';






function OurService() {

    const [index, setIndex] = useState(0)
    const handle = (e) => {
        setIndex(e)
    }
    return (
        <>
            <Banner
                className='bg-light6'
                subtitle='Did you Digitally Streamline your Business?'
                title='Our Services'
                bodytext="Don't worry, IT Cart does it for you!
            We cover that extra mile to ensure your technology needs are meet with the best in the class expertise, services & support!" />

            <section>
                <Container className="tabs-container" fluid>
                    <Row>
                        <Col md={12} className="">
                            <CommonTab careerData={Solution} onClick={handle} activeTab="Web Development" />
                        </Col>
                    </Row>

                </Container>
                <div className="career-section">

                    {index === 0 ?
                        <div>
                            <Web />
                        </div>
                        : index === 1 ?
                            <ServiceApp />
                            : index === 2 ?
                                <Business />
                                : index === 3 ?
                                    <Technology />
                                    : null}
                </div>

            </section>

            <PeopleSay />

        </>
    )
}

export default OurService;

