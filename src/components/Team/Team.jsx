'use client';

import React, { useState, useRef } from 'react';
import { Container, Nav, Overlay, Popover } from 'react-bootstrap';
import SlideCard from '../Card/SlideCard';
import styles from './Team.module.css'; // Import the styles from the Team.module.css
import Team1 from '../assets/team1.png';
import Team2 from '../assets/team2.png';

const PeopleSay = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const SlideData = [
        { id: 1, img: Team1, title: 'Attila Probáld CEO', subtitle: 'feat. Agency' },
        { id: 2, img: Team2, title: 'Attila Probáld CEO', subtitle: 'feat. Agency' },
        { id: 3, img: Team1, title: 'Attila Probáld CEO', subtitle: 'feat. Agency' },
    ];

    return (
        <section className={`${styles.team} py-5`}>
            <Container fluid="xxl" className="bg-team rounded-8 px-6 pt-5 pb-5">
                <div className="text-center">
                    <h2>Meet the Team</h2>
                    <h4>who make this possible</h4>
                </div>

                <div className={`d-flex flex-wrap justify-content-center mt-5 ${styles.columnGap}`}>
                    {SlideData.map((item) => (
                        <div className="mb-4" style={{ flex: '1 1 30%', maxWidth: '30%' }} ref={ref} key={item.id}>
                            <SlideCard onClick={handleClick} classBody="pb-0" className="box-shadow-sm border-0 bg-white p-0" src={item.img}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p className="fs-6">{item.subtitle}</p>
                                </div>
                            </SlideCard>
                            <Overlay
                                show={show}
                                target={target}
                                placement="right-end"
                                container={ref.current}
                                containerPadding={20}
                            >
                                <Popover className="bg-blue meet-overlay" id="popover-contained">
                                    <Popover.Body>
                                        <small className="text-white">
                                            “We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.” feat. Agency
                                        </small>
                                        <h6 className="mb-0 mt-3 text-white">{item.title}</h6>
                                        <p className="fs-6 text-white">{item.subtitle}</p>
                                    </Popover.Body>
                                </Popover>
                            </Overlay>
                        </div>
                    ))}
                </div>
                <div className="pt-5 text-center">
                    <Nav.Link className="fs-6 text-blue">MEET THE WHOLE TEAM <i className="bi bi-arrow-right"></i></Nav.Link>
                </div>
            </Container>
        </section>
    );
};

export default PeopleSay;
