import React, { useEffect, useState, createContext } from 'react';
import elysiaClient from '../../utils/elysiaClient';
import Comment from '../Comment/Comment';
import CommentForm from '../CommentForm/CommentForm';

export const CommentContext = createContext();

const commentRe = (comments = []) => {
  return comments.map((comment) => {
    if (!comment.children || (comment.children && !comment.children.length)) {
      return (
        <div key={comment.id} className="comment__container">
          <Comment data={comment} />
        </div>
      );
    }

    return (
      <div key={comment.id} className="comment__container">
        <Comment data={comment} />
        {commentRe(comment.children)}
      </div>
    );
  });
};

function CommentContainer({ articleId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async (articleId) => {
      const res = await elysiaClient.articles.fetchComments(articleId);
      console.log(res);
      if (res) {
        setComments(res.data.data.rows);
      }
    };
    fetchComments(articleId);
  }, [articleId]);

  return (
    <div className="comments__container">
      <h5 className="headline">Comments</h5>
      <CommentContext.Provider value={{ comments, setComments }}>
        <CommentForm
          onSubmit={(comment) => setComments([...comments, comment])}
          sourceId={articleId}
        />
        <div className="comments">{commentRe(comments)}</div>
      </CommentContext.Provider>
    </div>
  );
}

export default CommentContainer;
