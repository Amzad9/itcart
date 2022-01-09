import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Banner from '../banner/Banner';
import SlideCard from '../Card/SlideCard';
import { ResourcesData } from '../Utility'
import CommonTab from '../Careers/CommonTab'
import Masonry from 'react-masonry-css'
import NewsLetter from '../NewsLetter/NewsLetter';
import HelpCenter from './HelpCenter';
import News from './News';
import CaseSudies from './CaseSudies';
import Blog from './Blog';
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
                className="bg-resource"
                subtitle='Make Your Work Efficient With'
                title='Resources'
                bodytext='Body text body text body textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody textbody text' />

            <section>
                <Container className='resources-tabs' fluid>
                    <Row className='mx-0'>
                        <Col md={12} className="">
                            <CommonTab careerData={ResourcesData} onClick={handle} activeTab="Blogs" />
                        </Col>
                    </Row>

                </Container>
              
                
                    {index === 0 ?
                       
                            <Blog />
                       
                        : index === 1 ?
                            <CaseSudies />
                            : index === 2 ?
                                
                                    <News />
                               
                                : index === 3 ?
                                   
                                       <HelpCenter />
                                   
                                    : null}
 

            </section>
            <NewsLetter />
        </>
    )
}

export default Resources
