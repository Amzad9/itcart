'use client';

import React from 'react';
import PropTypes from 'prop-types';

const SlideCard = (props) => {
  const getImageSrc = (img) => img?.src || img || '';

  return (
    <div onClick={props.onClick} className={`card bg-base-100 shadow-xl ${props.className || ''}`}>
      <figure>
        <img 
          src={getImageSrc(props.src)} 
          alt={props.alt || 'Card image'} 
          className="w-full h-auto object-cover" 
        />
      </figure>
      <div className={`card-body ${props.classBody || ''}`}>
        {props.children}
      </div>
    </div>
  );
};

SlideCard.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  classBody: PropTypes.string,
  children: PropTypes.node
};

SlideCard.defaultProps = {
  onClick: () => {},
  className: '',
  classBody: '',
  alt: 'Card image',
};

export default SlideCard;
