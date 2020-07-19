import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReadHeader from '../../ReadHeader/ReadHeader';
import articles from '../../../mockData/articles';
import postImg_2 from '../../../assets/images/5e220a63b9122.png';

const article1 = articles[1];

function BasicCard({
  image,
  title,
  url,
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
          <img src={image || postImg_2} alt="post-avatar" />
        </div>
      </section>

      <section className="card__details">
        <Link to={`/articles/${url}`}>
          <h6 data-test="card__title" className="milli card__title">
            {title}
          </h6>
        </Link>

        <ReadHeader author={article1.author} publishDate={article1.createdAt} />
      </section>
    </div>
  );
}

BasicCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  minWidth: PropTypes.string,
  space: PropTypes.string,
};
export default BasicCard;
