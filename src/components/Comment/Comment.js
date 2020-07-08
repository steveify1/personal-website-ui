import React, { useState, useContext } from 'react';
import { IoMdChatbubbles } from 'react-icons/io';
import CommentForm from '../CommentForm/CommentForm';
import CommentAuthor from '../CommentAuthor/CommentAuthor';
import { CommentContext } from '../CommentContainer/CommentContainer';

function Comment({ data }) {
  const [showForm, setShowForm] = useState(false);
  const { comments, setComments } = useContext(CommentContext);
  const author = {
    full_name: data.full_name,
    img_url: '',
  };

  const renderNewReply = (reply) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === reply.parent_id) {
          return {
            ...comment,
            children: [...comment.children, reply],
          };
        }

        return comment;
      })
    );
  };

  return (
    <div className="comment">
      <article className="comment__body">{data.body}</article>

      <section className="comment__footer flex ai-center jc-space-between">
        <CommentAuthor author={author} publishDate={data.createdAt} />
        {!data.parent_id ? (
          <IoMdChatbubbles
            className="icon comment__icon"
            onClick={() => setShowForm(!showForm)}
          />
        ) : null}
      </section>

      {showForm ? (
        <CommentForm
          onSubmit={(reply) => renderNewReply(reply)}
          sourceId={data.source_id}
          parentId={data.id}
        />
      ) : null}
    </div>
  );
}

export default Comment;
