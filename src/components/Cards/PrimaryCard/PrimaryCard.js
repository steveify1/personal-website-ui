import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReadHeader from '../../ReadHeader/ReadHeader';
import articles from '../../../mockData/articles';

const article1 = articles[1];

function PrimaryCard({
  image,
  title,
  body,
  date,
  author,
  minWidth,
  maxWidth,
  space,
}) {
  return (
    <div
      data-test="primary-card"
      aria-label="card"
      className="card primary-card"
      style={{ minWidth: minWidth, maxWidth: maxWidth, margin: space }}
    >
      <section
        data-test="card__image"
        className="card__image rounded rounded--circle"
      >
        <div className="image-wrapper">
          <img src={image || ''} alt="post-avatar" />
        </div>
      </section>

      <section className="card__details">
        <Link to={`/articles/man-untold-45677`}>
          <h6 data-test="card__title" className="milli card__title">
            {title}
          </h6>
        </Link>

        <ReadHeader author={article1.author} publishDate={article1.createdAt} />
      </section>
    </div>
  );
}

PrimaryCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  minWidth: PropTypes.string,
  space: PropTypes.string,
};
export default PrimaryCard;
