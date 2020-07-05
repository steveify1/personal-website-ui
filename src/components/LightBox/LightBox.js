import React from 'react';

function LightBox({ color, style, onClick }) {
  return (
    <div className={`lightbox lightbox__${color}`} onClick={onClick}></div>
  );
}

export default LightBox;
