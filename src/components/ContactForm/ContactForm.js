import React, { useState } from 'react';
import useForm from '../../hooks/useForm';

const initialFormState = {
  first_name: '',
  last_name: '',
  email: '',
  message: '',
};

function ContactForm({ onSuccess }) {
  const [state, setState] = useState(initialFormState);
  const [error, setError] = useState('');

  const runOnSuccess = (response) => {
    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess(response);
    }
  };

  const setField = ({ currentTarget: { id, value } }) => {
    setState({ ...state, [id]: value });
  };

  const submit = async () => {
    const { first_name, last_name, email, message } = state;
    if (first_name && last_name && email && message) {
      runOnSuccess({ done: true });
    } else {
      setError('All fields are required.');
    }
  };

  const { isProcessing, handleSubmit, FormButton } = useForm(submit);

  return (
    <div className="contact__form">
      <form className="form" onSubmit={handleSubmit}>
        {/* <h5 className="headline">Contact</h5> */}
        <p>Need to talk? Kindly leave a message. </p>
        <br />
        <p className="error mini">{error}</p>
        <div className="form-group">
          <input
            type="text"
            id="first_name"
            className="form-control"
            placeholder="First name *"
            value={state.first_name}
            onChange={setField}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="last_name"
            className="form-control"
            placeholder="Last name *"
            value={state.last_name}
            onChange={setField}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Enter a valid  email *"
            value={state.email}
            onChange={setField}
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            value={state.message}
            onChange={setField}
            className="form-control"
            placeholder="Your message *"
          ></textarea>
        </div>
        <FormButton
          isProcessing={isProcessing}
          className="btn btn-primary btn-md btn-shadow"
        >
          Submit
        </FormButton>
      </form>
    </div>
  );
}

export default ContactForm;
