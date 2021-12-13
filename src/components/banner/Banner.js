import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
const Banner = (props) => {
    return (
        <section className={"py-5 common-banner " + props.className}>
            <Container>
                <Row>
                    <Col>
                        <div className={"text-center "}>
                            
                            <h1 className="mb-3 mt-3 fw-900">{props.title}</h1>
                            <h4 className='mb-5'>{props.subtitle}</h4>
                            <p className="col-12 col-md-5 m-auto">{props.bodytext}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
