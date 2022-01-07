import React, { useState, useRef } from 'react'
import { Container, Row, Col, Nav, Overlay, Popover } from 'react-bootstrap';
import SlideCard from '../Card/SlideCard';
import '../Client/Client.scss'
import './Team.scss'
// import Union from '../assets/Union.png';


import Team1 from '../assets/team1.png';
import Team2 from '../assets/team2.png';



// import ScrollAnimation from 'react-animate-on-scroll';
{/* <ScrollAnimation animateIn="fadeIn">
               Some Text
            </ScrollAnimation> */}

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
        { id: 3, img: Team1, title: 'Attila Probáld CEO', subtitle: 'feat. Agency' }
        // {id: 1, img: Union, title: 'Attila Probáld CEO', subtitle: 'feat. Agency'}
    ]

    return (
        <section className="clients  team py-5">
            <Container fluid="xxl" className="bg-team rounded-8 px-6 pt-5 pb-5">
                <Row>
                    <Col className="text-center" md="12">
                        <h2>Meet the Team</h2>
                        <h4>who make this possible</h4>
                    </Col>
                </Row>


                <Row className="mt-5 gx-7">
                    {SlideData.map(item => (
                        <Col className="mb-4 mb-xl-0" sm={12} md={6} xl={4} ref={ref}>
                            <SlideCard onClick={handleClick} classBody="pb-0" className="box-shadow-sm border-0 bg-white  p-0" src={item.img}>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p className="fs-6">{item.subtitle}</p>
                                </div>
                                <div class="card-img-overlay">
                                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_1542_202)">
                                    <path d="M42.2007 10H12.9906C11.3945 10 10 11.1484 10 12.7258V42.0008C10 43.5867 11.3945 45 12.9906 45H42.1921C43.7968 45 44.9999 43.5773 44.9999 42.0008V12.7258C45.0093 11.1484 43.7968 10 42.2007 10ZM20.8492 39.1742H15.8351V23.5844H20.8492V39.1742ZM18.5156 21.2141H18.4797C16.875 21.2141 15.8359 20.0195 15.8359 18.5242C15.8359 17.0016 16.9023 15.8352 18.543 15.8352C20.1836 15.8352 21.1875 16.993 21.2234 18.5242C21.2226 20.0195 20.1836 21.2141 18.5156 21.2141ZM39.1742 39.1742H34.1601V30.65C34.1601 28.6078 33.4304 27.2125 31.6164 27.2125C30.2304 27.2125 29.4101 28.15 29.0453 29.0633C28.9086 29.3914 28.8718 29.8383 28.8718 30.2945V39.1742H23.8578V23.5844H28.8718V25.7539C29.6015 24.7148 30.7414 23.2195 33.3937 23.2195C36.6851 23.2195 39.175 25.3891 39.175 30.0664L39.1742 39.1742Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_1542_202" x="0" y="0" width="55" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="5"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1542_202"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1542_202" result="shape"/>
                                    </filter>
                                    </defs>
                                    </svg>
                                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.75">
<path d="M35 7.31772C33.6871 7.88819 32.298 8.26402 30.8766 8.43335C32.3704 7.55862 33.4938 6.16897 34.036 4.52501C32.6237 5.35086 31.0811 5.93031 29.4744 6.23855C28.7978 5.52946 27.9841 4.96536 27.0827 4.58053C26.1813 4.19571 25.211 3.9982 24.2309 4.00001C20.2628 4.00001 17.0516 7.1646 17.0516 11.0656C17.0487 11.6083 17.1109 12.1493 17.2368 12.6771C14.3913 12.5437 11.6051 11.8178 9.05624 10.5459C6.5074 9.27402 4.25212 7.48409 2.43469 5.29064C1.79709 6.36552 1.45989 7.59192 1.45833 8.84168C1.45833 11.2917 2.73656 13.4573 4.66667 14.7261C3.52313 14.6989 2.40303 14.3963 1.40146 13.8438V13.9313C1.40146 17.3583 3.88063 20.2094 7.16187 20.8583C6.54484 21.0228 5.909 21.1062 5.27042 21.1063C4.8173 21.1071 4.36521 21.0631 3.92073 20.975C4.83292 23.7823 7.48781 25.824 10.6327 25.8823C8.07726 27.8517 4.93983 28.9162 1.71354 28.9083C1.14087 28.9075 0.568725 28.8734 0 28.8063C3.28211 30.9021 7.0973 32.0106 10.9915 32C24.2156 32 31.4402 21.2302 31.4402 11.8896C31.4402 11.5833 31.4322 11.2771 31.4176 10.9781C32.8199 9.98068 34.033 8.74114 35 7.31772Z" fill="white"/>
</g>
</svg>


 
  </div>


                                {/* <Overlay
                                    show={show}
                                    target={target}
                                    placement="right-end"
                                    container={ref}
                                    containerPadding={20}
                                >
                                    <Popover className="bg-blue meet-overlay" id="popover-contained">

                                        <Popover.Body>
                                            <small className="text-white"> “We looked at several tools, including Monday.com, Basecamp, and Asana, but none could offer the breadth of features that Scoro has.”
                                                feat. Agency
                                            </small>
                                            <h6 className="mb-0 mt-3 text-white">{item.title}</h6>
                                            <p className="fs-6 text-white">{item.subtitle}</p>
                                        </Popover.Body>
                                    </Popover>
                                </Overlay> */}
                            </SlideCard>
                        </Col>
                    ))}



                </Row>
                <Row>
                    <Col md={12} className="pt-5">
                        <Nav.Link className="fs-6 text-blue text-center">MEET THE WHOLE TEAM <i className="bi bi-arrow-right"></i></Nav.Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PeopleSay
