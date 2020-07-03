import React from 'react';

function LightBox({ color, style, onClick }) {
  return (
    <div
      className={`lightbox lightbox__${color}`}
      onClick={onClick}
      // style={style}
    >
      I am LightBox
    </div>
  );
}

export default LightBox;
