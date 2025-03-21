import React from 'react';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import styles from './Business.module.css'; // Import the CSS Module

import Dislike from '../assets/dislike.png';
import Like from '../assets/like.png';

function Business() {
    return (
        <section className={styles.business}>
            <Container fluid="xxl" className="bg-business rounded-8 px-6 pt-5 pb-5">
                <Row>
                    <Col md={12} className="text-center">
                        <h2 className="mb-5">How we help Businesses Grow!</h2>
                        <p className="col-12 col-md-12 col-xxl-7 mx-auto">
                            IT Cart helps a Business develop into an Enterprise that is technologically systematized to automate most of its processes in order to perform at its optimally best.
                        </p>
                    </Col>
                </Row>
                <Row className="gx-0 align-items-center mt-5">
                    <Col md={4} className={`${styles.basic} mt-2 pt-2 basic mb-4 mb-md-0`}>
                        <Card className="mt-2 rounded-0">
                            <Table className="mb-0" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Dependency</td>
                                    </tr>
                                    <tr>
                                        <td>Possibility of Error</td>
                                    </tr>
                                    <tr>
                                        <td>Growth</td>
                                    </tr>
                                    <tr>
                                        <td>Tracking KPI’s</td>
                                    </tr>
                                    <tr>
                                        <td>Generating Reports</td>
                                    </tr>
                                    <tr>
                                        <td>Administration</td>
                                    </tr>
                                    <tr>
                                        <td>Engaging employees in Unison</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                    <Col md={4} className={`${styles.formatCard} format-card mb-4 mb-md-0`}>
                        <Card>
                            <div className="card-header bg-primary text-center">
                                <h4 className="text-white">Traditional Business Format</h4>
                            </div>
                            <Table className="mb-0 text-center" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>Human</td>
                                    </tr>
                                    <tr>
                                        <td>High</td>
                                    </tr>
                                    <tr>
                                        <td>Difficult</td>
                                    </tr>
                                    <tr>
                                        <td>Difficult</td>
                                    </tr>
                                    <tr>
                                        <td>Manually</td>
                                    </tr>
                                    <tr>
                                        <td>In person</td>
                                    </tr>
                                    <tr>
                                        <td>Difficult</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="card-footer d-flex justify-content-center align-items-center bg-white text-center py-3">
                                <img src={Dislike} alt="" />
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className={`${styles.enterprice} enterprice mb-4 mb-md-0`}>
                        <Card>
                            <div className="card-header bg-secondary text-center">
                                <h4 className="text-white">Digitally Transformed Enterprise</h4>
                            </div>
                            <Table className="mb-0 text-center" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>System</td>
                                    </tr>
                                    <tr>
                                        <td>Low</td>
                                    </tr>
                                    <tr>
                                        <td>Easy to Scale</td>
                                    </tr>
                                    <tr>
                                        <td>Measured in real time</td>
                                    </tr>
                                    <tr>
                                        <td>Automatically</td>
                                    </tr>
                                    <tr>
                                        <td>From anywhere</td>
                                    </tr>
                                    <tr>
                                        <td>Easy</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="card-footer d-flex justify-content-center align-items-center bg-white text-center py-4">
                                <img src={Like} alt="" />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Business;
