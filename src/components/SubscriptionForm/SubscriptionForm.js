import React, { useState, Fragment } from 'react';
import axios from 'axios';

function SubscriptionForm({ onSuccess, onError }) {
  const [email, setEmail] = useState('');

  const subscribe = async (event) => {
    event.preventDefault();
    if (!email) return;
    try {
      // const res = await axios.get('/articles', {
      //   email,
      // });

      // console.log(res);

      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(email);
      }
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
