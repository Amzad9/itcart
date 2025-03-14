import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const SlideCard = (props) => {
    return (
        <Card onClick={props.onClick} className={props.className}>
            <img 
                variant="top" 
                src={props.src} 
                alt={props.alt} 
                className="img-fluid" 
            />
            <Card.Body className={props.classBody}>
                {props.children}
            </Card.Body>
        </Card>
    );
};

SlideCard.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired, // Add alt as a required prop
    classBody: PropTypes.string,
    children: PropTypes.node
};

SlideCard.defaultProps = {
    onClick: () => {},
    className: '',
    classBody: '',
};

export default SlideCard;
