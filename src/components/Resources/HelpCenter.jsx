import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Help from '../assets/help1.png';


function HelpCenter() {
    return (
        <>
        <Container fluid="xxl" className="rounded-8 bg-resource py-5 py-md-6 px-md-5 px-3 mb-5">

       
            <Row className="justify-content-center py-5 mb-5">
                <h2>Help Center-Tech Tutorials</h2>
                <p className='text-center'>Our whitepaper library, manuals and product guides to help end-users better utilize our solutions and services!</p>
                <Col sm={12} md={9} lg={7}>
                    <Form.Group className="mb-3 mt-5 position-relative d-flex" controlId="exampleForm.ControlTextarea1">
                        <Form.Control type="email" placeholder="Search for anything*" />
                        <svg className='position-absolute end-0 me-3 top-50 translate-middle' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4ZM2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11Z" fill="#FF0000" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9433 15.9433C16.3338 15.5528 16.967 15.5528 17.3575 15.9433L21.7075 20.2933C22.098 20.6838 22.098 21.317 21.7075 21.7075C21.317 22.098 20.6838 22.098 20.2933 21.7075L15.9433 17.3575C15.5528 16.967 15.5528 16.3338 15.9433 15.9433Z" fill="#FF0000" />
                        </svg>

                    </Form.Group>
                </Col>
            </Row>
            <Row className='pb-5 justify-content-center'>
                <Col className="col-12 col-md-10">
                    <Row className="gx-6">
                        <Col sm={12} md={4} className='mb-3 mb-md-0'>
                            <div className="card border-0 rounded-4 pb-4">
                                <img src={Help} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h4 className='mt-3'>Getting Started</h4>
                                    <p className='fw-500 py-3'>The basic things you need to know to start working smarter.</p>
                                    <a className="text-primary text-decoration-none fw-500 py-3">Start today</a>
                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={4} className='mb-3 mb-md-0'>
                            <div className="card border-0 rounded-4 pb-4">
                                <img src={Help} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h4 className='mt-3'>Getting Started</h4>
                                    <p className='fw-500 py-3'>The basic things you need to know to start working smarter.</p>
                                    <a className="text-primary text-decoration-none fw-500 py-3">Start today</a>
                                </div>
                            </div>

                        </Col>
                        <Col sm={12} md={4} className='mb-3 mb-md-0'>
                            <div className="card border-0 rounded-4 pb-4">
                                <img src={Help} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h4 className='mt-3'>Getting Started</h4>
                                    <p className='fw-500 py-3'>The basic things you need to know to start working smarter.</p>
                                    <a className="text-primary text-decoration-none fw-500 py-3">Start today</a>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className='justify-content-center mb-6 mt-5'>
                <Col sm={12} md={12}>
                    <h2>Can’t find what you are looking for?</h2>
                </Col>
                <Col sm={12} md={6} className='bg-white py-3 rounded-4 mt-5'>
                    <Row>
                        <Col sm={6} className='border-end py-5'>
                            <Row className='align-items-center mx-0 ps-4'>
                                <Col sm={2}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.75C6.0415 8.75 5.25 9.5415 5.25 10.5V31.5C5.25 32.4585 6.0415 33.25 7 33.25H35C35.9585 33.25 36.75 32.4585 36.75 31.5V10.5C36.75 9.5415 35.9585 8.75 35 8.75H7ZM1.75 10.5C1.75 7.6085 4.1085 5.25 7 5.25H35C37.8915 5.25 40.25 7.6085 40.25 10.5V31.5C40.25 34.3915 37.8915 36.75 35 36.75H7C4.1085 36.75 1.75 34.3915 1.75 31.5V10.5Z" fill="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.06649 9.49659C2.62074 8.7048 3.71192 8.51224 4.50371 9.06649L21.0001 20.614L37.4966 9.06649C38.2884 8.51224 39.3796 8.7048 39.9338 9.49659C40.4881 10.2884 40.2955 11.3796 39.5037 11.9338L22.0037 24.1838C21.4011 24.6056 20.5991 24.6056 19.9966 24.1838L2.49659 11.9338C1.7048 11.3796 1.51224 10.2884 2.06649 9.49659Z" fill="black" />
                                    </svg>

                                </Col>
                                <Col sm={10} className='ps-4'>
                                    <h6 className='fw-semibold mb-1'>E-mail us</h6>
                                    <p className="text-primary fw-500 mb-0">help@itcart.com</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6} className='py-5'>
                            <Row  className='align-items-center mx-0 ps-4'>
                                <Col sm={2}>
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2263 3.20791C11.5014 3.42402 11.8105 3.71477 12.166 4.06596C12.9278 4.81567 13.8115 6.01685 14.5698 7.16997C15.3366 8.33603 16.0472 9.56354 16.4455 10.4179L16.4457 10.4185L16.446 10.419C16.6717 10.9044 16.8752 11.3443 17.0182 11.7299C17.1634 12.1214 17.2841 12.5521 17.2849 13.0221C17.2865 14.0058 16.7526 14.7651 16.2382 15.4654C16.0905 15.6666 15.9649 15.8314 15.8567 15.9735C15.6235 16.2798 15.4705 16.4806 15.3481 16.7128C15.2287 16.9393 15.1939 17.1028 15.2504 17.3661C15.3319 17.7457 15.6862 18.5767 16.3741 19.6637C17.0395 20.715 17.9504 21.9008 19.0388 22.9858C20.1269 24.0705 21.2939 24.9574 22.3242 25.5991C23.3859 26.2604 24.2035 26.5999 24.5941 26.6832C24.8659 26.7412 25.0356 26.7049 25.2625 26.5868C25.502 26.4621 25.715 26.2995 26.0462 26.0467C26.1764 25.9473 26.3248 25.834 26.5003 25.7035L26.5005 25.7033L26.5138 25.6935C27.2165 25.1714 27.9972 24.5913 28.9868 24.5924C29.4757 24.5929 29.9146 24.731 30.301 24.8887C30.6702 25.0394 31.0943 25.2531 31.5595 25.4874L31.5985 25.507C32.4139 25.9182 33.6264 26.6148 34.8001 27.3742C35.9531 28.1201 37.1698 28.9909 37.9273 29.7542L37.9284 29.7553C38.2806 30.111 38.5721 30.4201 38.7887 30.6951C38.9984 30.9614 39.2286 31.3058 39.3257 31.7343C39.4351 32.2169 39.3359 32.6184 39.2343 32.8969C39.1885 33.0224 39.1344 33.143 39.0956 33.2292C39.0896 33.2426 39.0837 33.2557 39.0779 33.2686C39.0419 33.3485 39.0104 33.4183 38.977 33.4982L38.9762 33.5001L38.9754 33.5021C38.6325 34.3151 38.2155 35.0948 37.7295 35.8313L37.7281 35.8335L37.7266 35.8357C36.777 37.2623 35.8837 38.1944 34.4951 38.8412C33.7735 39.1773 32.7425 39.5168 31.1403 39.317C29.5992 39.1248 27.5942 38.4425 24.8577 36.9099L24.8571 36.9095C20.4781 34.4536 17.4397 32.3364 13.5202 28.4278C9.61226 24.5308 7.6914 21.9873 5.00057 17.099C2.29167 12.1779 2.29555 9.14315 3.06915 7.49007C3.71868 6.1021 4.66012 5.21291 6.08196 4.26828L6.08476 4.26642L6.08757 4.26457C6.82487 3.78015 7.60498 3.36428 8.41813 3.02215L8.42081 3.02102L8.4235 3.0199C8.50397 2.98646 8.57435 2.95491 8.65483 2.91884C8.66745 2.91318 8.68032 2.90741 8.69351 2.90151C8.77998 2.86281 8.90057 2.80901 9.02604 2.76344C9.30415 2.66242 9.70486 2.56374 10.1866 2.67236C10.6149 2.76893 10.9594 2.99834 11.2263 3.20791ZM9.43368 5.44274C8.77017 5.72209 8.13355 6.06145 7.53176 6.45659C6.33061 7.25494 5.8157 7.81416 5.44669 8.60269C5.20146 9.12672 4.74761 11.196 7.30019 15.8331C9.87085 20.5031 11.6414 22.8471 15.3738 26.5691C19.0945 30.2794 21.9311 32.2588 26.1404 34.6196C28.7164 36.0623 30.3864 36.5776 31.4651 36.7121C32.4827 36.839 33.0165 36.6342 33.3867 36.4617C34.1814 36.0915 34.7431 35.5802 35.5401 34.3832C35.9363 33.7825 36.2763 33.1466 36.556 32.4836C36.5938 32.3934 36.6308 32.31 36.662 32.2404C36.5396 32.0951 36.3522 31.8942 36.0637 31.6029C35.5185 31.0537 34.5066 30.3108 33.3742 29.5781C32.2624 28.8589 31.1323 28.2119 30.417 27.8511C29.9007 27.5911 29.57 27.4256 29.3089 27.319C29.055 27.2153 28.9811 27.2174 28.984 27.2174C29.0078 27.2174 28.9267 27.171 28.066 27.8104C27.9781 27.8758 27.883 27.9487 27.7824 28.0258C27.399 28.3198 26.9346 28.6757 26.4745 28.9152C25.7871 29.2731 24.9978 29.4534 24.0465 29.2505C23.214 29.0729 22.0912 28.5465 20.9364 27.8273C19.7502 27.0884 18.4247 26.08 17.1856 24.8449C15.9467 23.61 14.916 22.2684 14.156 21.0675C13.4187 19.9024 12.8641 18.7564 12.6839 17.9171C12.4787 16.9613 12.6658 16.1721 13.026 15.4887C13.2582 15.0483 13.6052 14.5932 13.8909 14.2187C13.9749 14.1085 14.0537 14.0053 14.1226 13.9115C14.6743 13.1602 14.6614 13.0404 14.66 13.0274C14.6599 13.0269 14.6599 13.0266 14.6599 13.0264C14.6598 13.0011 14.654 12.9042 14.557 12.6428C14.4579 12.3755 14.3035 12.0372 14.0659 11.5261C13.7413 10.8301 13.1051 9.72013 12.3766 8.6123C11.6396 7.49163 10.8795 6.48263 10.324 5.93618L10.3231 5.93525L10.3222 5.93433C10.0291 5.64482 9.82751 5.45721 9.68199 5.33507C9.61127 5.36668 9.52607 5.40431 9.43368 5.44274Z" fill="black" />
                                    </svg>

                                </Col>
                                <Col sm={10} className='ps-4'>
                                    <h6 className='fw-semibold mb-1'>Request a call-back</h6>
                                    <p className="text-primary fw-500 mb-0">UK +44 20 3318 4599</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                </Col>
            </Row>
            </Container>
        </>
    )
}

export default HelpCenter
