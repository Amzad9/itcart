import React from 'react'
import { Card } from 'react-bootstrap';

const SlideCard = (props) => {
    return (
        <>
            <Card onClick={props.onClick} className={props.className}>
                <img variant="top" src={props.src} className="img-fluid"/>
                <Card.Body className={props.classBody}>
                    {props.children}
                </Card.Body>
            </Card>
        </>
    )
}

export default SlideCard;
