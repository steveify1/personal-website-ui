import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReadHeader from '../../ReadHeader/ReadHeader';
import articles from '../../../mockData/articles';
import postImg_2 from '../../../assets/images/5e220a63b9122.png';

const article1 = articles[1];

function SearchCard({
  image,
  title,
  slug,
  body,
  date,
  author,
  minWidth,
  space,
}) {
  return (
    <div
      data-test="search-card"
      aria-label="card"
      className="card search-card flex rounded"
      style={{ minWidth: minWidth, margin: space }}
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
        <Link to={`/articles/${slug}`}>
          <h6 data-test="card__title" className="kilo card__title">
            {title}
          </h6>
        </Link>

        <p className="card__body mini">{body && body.slice(0, 80)}...</p>

        <ReadHeader author={article1.author} publishDate={article1.createdAt} />
      </section>
    </div>
  );
}

SearchCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  minWidth: PropTypes.string,
  space: PropTypes.string,
};
export default SearchCard;
