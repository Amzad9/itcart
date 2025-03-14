// PrevArrow.jsx
import React from 'react';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-white flex justify-center items-center rounded-full w-12 h-12 border-2 border-gray-300`}
      style={{ ...style, display: 'block', left: '-48px' }}
      onClick={onClick}
    >
      <i className="text-gray-600">←</i>
    </div>
  );
};

export default PrevArrow;
