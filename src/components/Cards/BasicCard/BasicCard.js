import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReadHeader from '../../ReadHeader/ReadHeader';
import articles from '../../../mockData/articles';
import postImg_2 from '../../../assets/images/5e220a63b9122.png';

const formatDate = (date) => {
  const dateInstance = new Date(date);
  const [day, month, dayInt, year] = dateInstance.toDateString().split(' ');

  return {
    month,
    dayInt,
    year,
    day,
    dayIntMonth: `${dayInt} ${month}`,
    dayMonth: `${day} ${month}`,
    monthYear: `${month} ${year}`,
  };
};

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
  const maxTitleLength = 35;
  const titlelength = title.length;
  const shortTitle =
    titlelength > maxTitleLength
      ? `${title.slice(0, maxTitleLength)}...`
      : title;

  return (
    <div
      data-test="basic-card"
      aria-label="card"
      className="card basic-card rounded transition"
      style={{ minWidth: minWidth, maxWidth: maxWidth, margin: space }}
    >
      <Link title={title} to={`/articles/${url}`}>
        <div className="card__date micro">{formatDate(date).monthYear}</div>
        <section data-test="card__image" className="card__image">
          <div className="image-wrapper">
            <img src={image || postImg_2} alt="post-avatar" />
          </div>
        </section>

        <section className="card__details">
          <h6 data-test="card__title" className="kilo card__title">
            {shortTitle}
          </h6>

          <p className="card__body mini">{body}</p>

          <div className="card__author flex jc-flex-end">
            <ReadHeader
              author={article1.author}
              // publishDate={article1.createdAt}
            />
          </div>
        </section>
      </Link>
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
