'use client';

import React from 'react';
import './Button.scss';

const button = (props) => {
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-error',
    warning: 'btn-warning',
    info: 'btn-info',
    light: 'btn-ghost',
    dark: 'btn-neutral',
  };

  const variant = variantClasses[props.variant] || 'btn-primary';

  return (
    <button className={`btn ${variant} ${props.className || ''}`}>
      {props.children}
    </button>
  );
};

export default button;
