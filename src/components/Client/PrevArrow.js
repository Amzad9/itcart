import React from 'react';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    > <i className="bi bi-chevron-left fs-2"></i> </div>
  );
}

export default PrevArrow;