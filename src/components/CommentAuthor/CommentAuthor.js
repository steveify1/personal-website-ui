import React, { Fragment } from 'react';

const CommentAuthor = ({ author, publishDate }) => {
  return author ? (
    <Fragment>
      <div aria-label="comment__author" className="comment__author">
        <div className="comment__author__user user flex ai-center">
          <div className="comment__image user__image--sm rounded rounded--circle">
            <div className="image-wrapper">
              <img src={author.img_url} alt="comment author" />
            </div>
          </div>
          <div className="user__name user__name--sm">
            <p className="micro">{author.full_name}</p>
            <p className="comment__date mini">{publishDate}</p>
          </div>
        </div>
      </div>
    </Fragment>
  ) : null;
};

export default CommentAuthor;
