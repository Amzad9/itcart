import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import './Video.scss'

const Video = () => {
  
    return (
        <section className="video-container pt-4">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col className="text-center" xs={12} sm={12} md={12} xxl={4}>
                        <h2>What does iT Cart have to offer?</h2>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={12} md={12} xxl={7} className="text-center">
                       <iframe src="https://www.youtube.com/embed/sY6FWJu52VE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Video
