import React from 'react';

function TwoColumnBanner({ children, reverse }) {
  console.log(children);
  return (
    <div>
      <div
        class={`grid banner two-column-banner ${
          reverse ? 'two-column-banner--reverse' : ''
        }`}
      >
        <section
          className={`two-column-banner__column two-column-banner__column-2 ${
            reverse ? 'two-column-banner--reverse' : ''
          }`}
        >
          {children[0]}
        </section>
        <section className="two-column-banner__column two-column-banner__column-2">
          {children[1]}
        </section>
      </div>

      <div className="two-column-banner__footer">
        {Array.isArray(children) ? children.slice(2) : null}
      </div>
    </div>
  );
}

export default TwoColumnBanner;
