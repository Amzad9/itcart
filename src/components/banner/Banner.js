import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
const Banner = (props) => {
    return (
        <section className="py-5 common-banner">
            <Container>
                <Row>
                    <Col>
                        <div className={"text-center " + props.className}>
                            <h4>{props.subtitle}</h4>
                            <h1 className="fw-bold mb-4 mt-3">{props.title}</h1>
                            <p className="col-12 col-md-7 m-auto">{props.bodytext}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
