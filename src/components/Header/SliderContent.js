import React from 'react'
import { Row, Col} from 'react-bootstrap';

const  SliderContent = ({title, subtitle, children, className}) => {
    return (
        <div>
           <Row className={className}>
                <Col xs={12} sm={12} md={12} lg={12} xl={9} className="ps-9">
                   <div className="ps-5">
                   <h1 className="mb-5">{title}</h1>
                    <p className="col-12 col-md-6 mb-5">{subtitle}</p>
                    {children}
                   </div>
                </Col>
            </Row> 
        </div>
    )
}

export default SliderContent
