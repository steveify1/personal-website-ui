import React, { Fragment } from 'react';
import Banner from '../Banner/Banner';
import ReadHeader from '../ReadHeader/ReadHeader';
import Loader from '../Loader/Loader';
import './reader.scss';

export default ({ article }) => {
  window.scrollTo(0, 0);

  return article ? (
    <Fragment>
      <div aria-label="reader" className="reader">
        <h1 className="headline headline-3 article__title">{article.title}</h1>

        <div className="reader__header">
          <ReadHeader author={article.author} publishDate={article.createdAt} />
        </div>

        <Banner img={article.img_url} maxHeight="250px" />

        {article.highlight ? (
          <blockquote className="milli blockquote article__highlight">
            {article.highlight}
          </blockquote>
        ) : null}

        <br />

        <p aria-label="article__body">{article.body}</p>
      </div>
    </Fragment>
  ) : (
    <Loader />
  );
};
