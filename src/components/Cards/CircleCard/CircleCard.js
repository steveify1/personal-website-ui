import React from 'react';

function CirlceCard({ image, title, body, date, author, minWidth, space }) {
  return (
    <div
      className="card circle-card grid jc-center"
      style={{ minWidth: minWidth, margin: space }}
    >
      <section className="card__image rounded">
        <div className="image-wrapper">
          <img src={image || ''} alt="post-avatar" />
        </div>
      </section>

      <section className="card__details rounded">
        <h6 className="milli card__details__title">{title}</h6>

        {/* <p className="micro card__details__date">{new Date().toDateString()}</p> */}
        <p className="micro card__details__date">{date}</p>
        <div className="card__details__author">
          <div className="card__details__author--image"></div>
          <p className="micro card__details__author--name">
            {author || 'Jennifer Egwunwanwko'}
          </p>
        </div>
      </section>
    </div>
  );
}

export default CirlceCard;
