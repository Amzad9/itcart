import React from 'react';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      > <i class="bi bi-chevron-right fs-2"></i> </div>
    );
  }


export default  NextArrow