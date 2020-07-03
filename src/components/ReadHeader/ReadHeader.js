import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './readHeader.scss';

const ReadHeader = ({ author, publishDate }) => {
  return author ? (
    <Fragment>
      <div aria-label="read-header" className="read-header">
        <div className="read-header__user user flex ai-center">
          <div className="user__image user__image--sm rounded rounded--circle">
            <div className="image-wrapper">
              <img src={author.img_url} alt="read author" />
            </div>
          </div>
          <div className="user__name user__name--sm">
            <Link to="/about">{`${author.first_name} ${author.last_name}`}</Link>
            <p className="read-header__last-modified mini">{publishDate}</p>
          </div>
        </div>
      </div>
    </Fragment>
  ) : null;
};

export default ReadHeader;
