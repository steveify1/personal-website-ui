import React from 'react';

function PlainBanner({ children, type }) {
  return (
    <div
      className={`banner plain-banner flex flex-column ai-center jc-center ${
        type || 'primary'
      }`}
    >
      <section className="section">
        <section className="section__inner">{children}</section>
      </section>
    </div>
  );
}

export default PlainBanner;
