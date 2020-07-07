import React, { useState, Fragment } from 'react';
import elysiaClient from '../../utils/elysiaClient';

function SubscriptionForm({ onSuccess, onError }) {
  const [email, setEmail] = useState('');

  const subscribe = async (event) => {
    event.preventDefault();
    if (!email) return;
    try {
      const res = await elysiaClient.subscribers.get('/articles', {
        email,
      });

      console.log(res);

      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(email);
      }
      setEmail('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <form className="form subscription-form" onSubmit={subscribe}>
        <div className="form-group flex-column">
          <input
            className="form-control"
            type="email"
            placeholder="Please enter a valid email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
          />
          <button className="btn btn-secondary  btn-shadow btn-md">
            Subscribe
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default SubscriptionForm;
