import React from 'react';
import bannerImg from '../../assets/images/5e29382ee0795.png';

export default ({ children, maxHeight, height, img }) => {
  return (
    <div
      className="banner banner__primary flex ai-center"
      style={{ height: height || '450px', maxHeight: maxHeight || '450px' }}
    >
      <div className="banner-img overlay">
        <div className="image-wrapper">
          <img src={img || bannerImg} alt="" />
        </div>
      </div>
      <div className="banner-text">{children}</div>
    </div>
  );
};
