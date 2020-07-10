import React, { useState, useRef } from 'react';
import elysiaClient from '../../utils/elysiaClient';
import useForm from '../../hooks/useForm';

function CommentForm({ onSubmit, sourceId, parentId }) {
  const commentator = JSON.parse(localStorage.getItem('commentator')) || {};
  const errorMsg = 'All fields are required';
  const [fullName, setFullName] = useState(commentator.fullName || '');
  const [email, setEmail] = useState(commentator.email || '');
  const [body, setBody] = useState('');
  const [shouldSaveCommentator, setShouldSaveCommentator] = useState(true);
  const [error, setError] = useState('');

  const formRef = useRef();

  const clearForm = () => {
    setFullName('');
    setEmail('');
    setBody('');
    setError('');
  };

  const saveCommentatorToLS = () => {
    localStorage.setItem('commentator', JSON.stringify({ fullName, email }));
  };

  const runOnSubmit = (newComment) => {
    if (onSubmit) {
      onSubmit(newComment);
    }
  };

  const composeCommentData = () => {
    const data = { full_name: fullName, email, body };
    return parentId ? { ...data, parent_id: parentId } : data;
  };

  const submitComment = async (e) => {
    e.preventDefault();
    const data = composeCommentData();
    const { email, full_name, body } = data;
    if (!email || !full_name || !body) {
      return setError(errorMsg);
    }
    const res = await elysiaClient.articles.postComment(sourceId, data);
    runOnSubmit(res.data.data);
    if (shouldSaveCommentator) {
      saveCommentatorToLS();
    }
    clearForm();
  };

  const { isProcessing, handleSubmit, FormButton } = useForm(submitComment);

  return (
    <div className="comment__form">
      {error ? <p className="mini error">{error}</p> : null}
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <div className="flex flex-column">
          {!commentator.fullName ? (
            <input
              className="form-control comment__input"
              type="text"
              placeholder="Full name *"
              value={fullName}
              onChange={({ currentTarget: { value } }) => setFullName(value)}
            />
          ) : null}
          {!commentator.fullName ? (
            <input
              className="form-control comment__input"
              type="email"
              placeholder="Enter a valid email *"
              value={email}
              onChange={({ currentTarget: { value } }) => setEmail(value)}
            />
          ) : null}
          <textarea
            className="form-control comment__input comment__textarea"
            value={body}
            placeholder="Your response *"
            onChange={({ currentTarget: { value } }) => setBody(value)}
          ></textarea>
        </div>

        {!commentator.fullName ? (
          <div className="flex ai-center checkbox-wrapper">
            <input
              id="should-save-commentator"
              className="form-control comment__input"
              type="checkbox"
              checked={shouldSaveCommentator}
              onChange={({ currentTarget: { checked } }) =>
                setShouldSaveCommentator(checked)
              }
            />
            <label for="should-save-commentator" className="mini">
              Save my name and email on this browser for when I want to another
              comment.
            </label>
          </div>
        ) : null}
        <FormButton
          isProcessing={isProcessing}
          className="btn milli btn-sm btn-primary"
        >
          comment
        </FormButton>
      </form>
    </div>
  );
}

export default CommentForm;
