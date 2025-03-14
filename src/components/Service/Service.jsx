import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Button from '../Button/button';
import TabContainer from '../Tabs/TabContainer';
import Tabs from '../Tabs/Tabs';
import NavLink from '../Tabs/NavLink';
import SlideCard from '../Card/SlideCard';
import { NavData } from '../Utility';
import styles from './Service.module.css'; // Import the CSS module
import Digital from '../assets/Web/1.png';
import Corporate from '../assets/Web/2.png';
import Document from '../assets/Web/3.png';
import Learning from '../assets/Web/4.png';
import Process from '../assets/Web/5.png';
import Project from '../assets/Web/6.png';

const Service = () => {
  const [index, setIndex] = useState(0);

  const web = [
    {
      id: 1,
      img: Digital,
      title: 'Digital (DX) Collaboration Portal',
      items: [
        'Collaboration Platform',
        'Corporate Events',
        'Document Management',
        'App Integration',
        'Social Media Integration',
        'Live Conferencing',
      ],
    },
    {
      id: 2,
      img: Corporate,
      title: 'Corporate Public Website',
      items: [
        'Brand Identity',
        'Offerings',
        'Testimonials',
        'Masterful Copy',
        'Social Media Integration',
        'Mobile Responsive',
      ],
    },
    {
      id: 3,
      img: Document,
      title: 'Document Management System (DMS)',
      items: [
        'Workflow Automation',
        'Document Indexing',
        'Keyword Search',
        'Document Editing',
        'Document Security',
        'Document Processing',
      ],
    },
    {
      id: 4,
      img: Learning,
      title: 'Digital Learning Platform',
      items: [
        'Centralized Learning Platform',
        'Online Training',
        'Collaboration',
        'Keyword Search',
        'Reports & Analysis',
        'Rewards & Appraisals',
      ],
    },
    {
      id: 5,
      img: Process,
      title: 'Digital Process Management',
      items: [
        'Visual Workflow',
        'Process Automation',
        'Role-based access',
        'Reports & Analytics',
        'Performance KPIs',
        'System Integration',
      ],
    },
    {
      id: 6,
      img: Project,
      title: 'Project Management System',
      items: [
        'Planning & Scheduling',
        'Project Budgeting',
        'Resource Management',
        'Task Management',
        'Time Tracking',
        'Reporting & Analytics',
      ],
    },
  ];

  return (
    <section className="clients service pt-5 mar-nagative bg-white">
      <Container fluid="xxl" className="bg-service rounded-8 px-6 pt-5 pb-4 mt-6">
        <Row>
          <Col className="text-center" md="12">
            <h2>Our Services</h2>
          </Col>
        </Row>
        <Row className="my-5 pb-4 service-tab">
          <Col md={12}>
            <TabContainer activeTab="web">
              <Tabs className="justify-content-start justify-content-lg-start justify-content-xxl-center">
                {NavData.map((item, index) => (
                  <Nav.Item key={item.key}>
                    <NavLink
                      onClick={() => setIndex(index)}
                      eventKey={item.key}
                      title={item.title}
                    />
                  </Nav.Item>
                ))}
              </Tabs>
            </TabContainer>
          </Col>
        </Row>

        {index === 0 && (
          <Row>
            {web.map((item) => (
              <Col xs={12} md={6} lg={4} xl={4} className={`mb-4 ${styles.flip}`} key={item.id}>
                <SlideCard className="border-0 bg-white front px-3 pt-3 pb-0" src={item.img}>
                  <h6>{item.title}</h6>
                </SlideCard>
                <SlideCard className={`border-0 bg-white back px-3 pt-2 pb-0 ${styles.back}`}>
                  <h5 className="text-black">{item.title}</h5>
                  <ul className={`text-start list mt-3 ${styles.list}`}>
                    {item.items &&
                      item.items.map((val, index) => (
                        <li key={index}>
                          <svg
                            className="me-2"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.55548 15.111C11.7283 15.111 15.111 11.7283 15.111 7.55548C15.111 3.38271 11.7283 0 7.55548 0C3.3827 0 0 3.38271 0 7.55548C0 11.7283 3.3827 15.111 7.55548 15.111Z"
                              fill="#DD87B8"
                            />
                            <path
                              d="M6.80691 10.4377C6.63693 10.438 6.47147 10.383 6.33548 10.2811L6.32705 10.2747L4.55141 8.91642C4.46917 8.85338 4.40016 8.77475 4.34831 8.68503C4.29646 8.59531 4.2628 8.49625 4.24923 8.39352C4.23566 8.29079 4.24245 8.18639 4.26923 8.08629C4.296 7.98618 4.34223 7.89233 4.40528 7.81009C4.46832 7.72786 4.54694 7.65884 4.63665 7.60699C4.72637 7.55514 4.82543 7.52146 4.92817 7.50789C5.0309 7.49432 5.13531 7.50112 5.23541 7.5279C5.33552 7.55467 5.42936 7.6009 5.5116 7.66395L6.66172 8.54591L9.37949 5.00025C9.44251 4.91805 9.52111 4.84906 9.61079 4.79724C9.70047 4.74541 9.79949 4.71176 9.90218 4.6982C10.0049 4.68463 10.1092 4.69143 10.2093 4.7182C10.3093 4.74497 10.4032 4.79118 10.4854 4.8542L10.4856 4.85438L10.4687 4.87781L10.486 4.85438C10.6519 4.98183 10.7604 5.16989 10.7878 5.37725C10.8151 5.58462 10.7591 5.79436 10.6319 5.96046L7.43523 10.1291C7.36127 10.2251 7.26618 10.3028 7.15733 10.3562C7.04849 10.4096 6.92881 10.4371 6.80759 10.4368L6.80691 10.4377Z"
                              fill="white"
                            />
                          </svg>
                          {val}
                        </li>
                      ))}
                  </ul>
                  <Row className={`btn-wrapper justify-content-between mx-0 mt-4 ${styles.btnWrapper}`}>
                    <Col sm={12} className="mt-3">
                      <Button className="text-white w-100 bg-secondary btn-b">Know more</Button>
                    </Col>
                  </Row>
                </SlideCard>
              </Col>
            ))}
          </Row>
        )}

        <Row>
          <Col md={12} className="pt-5">
            <Nav.Link className="fs-6 text-blue text-center">
              SEE ALL THE SERVICES <i className="bi bi-arrow-right"></i>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
