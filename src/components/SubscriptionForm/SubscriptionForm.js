import React, { useState, Fragment } from 'react';
import elysiaClient from '../../utils/elysiaClient';
import useForm from '../../hooks/useForm';

function SubscriptionForm({ onSuccess, onError }) {
  const [email, setEmail] = useState('');

  const subscribe = async (event) => {
    if (!email) return;
    try {
      const res = await elysiaClient.subscribers.subscribe({ email });

      if (!res) return;
      console.log(res);

      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(email);
      }
      setEmail('');
    } catch (error) {
      console.log(error.message);
    }
  };

  const { isProcessing, handleSubmit, FormButton } = useForm(subscribe);

  return (
    <Fragment>
      <form className="form subscription-form" onSubmit={handleSubmit}>
        <div className="form-group flex-column">
          <input
            className="form-control"
            type="email"
            placeholder="Please enter a valid email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
          />
          <FormButton
            isProcessing={isProcessing}
            className="btn btn-secondary  btn-shadow btn-md"
          >
            Subscribe
          </FormButton>
        </div>
      </form>
    </Fragment>
  );
}

export default SubscriptionForm;
