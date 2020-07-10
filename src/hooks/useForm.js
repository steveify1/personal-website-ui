import React, { useState, Fragment } from 'react';
import { Spinner } from '../components/Loader/Loader';

const FormButton = ({ isProcessing, children, ...rest }) => {
  const content = isProcessing ? (
    <span className="flex ai-center jc-center">
      <Spinner size="15px" />{' '}
      <span style={{ marginLeft: '0.5em' }}>{children}</span>
    </span>
  ) : (
    children
  );
  return (
    <button disabled={isProcessing} {...rest}>
      {content}
    </button>
  );
};

function useForm(onSubmit, onError, schema) {
  if (!onSubmit || typeof onSubmit !== 'function') {
    throw new Error('onSubmit handler must be a function');
  }

  const runOnError = (error) => {
    if (onError && typeof onError === 'function') {
      onError(error);
    }
  };

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isProcessing) {
      setIsProcessing(true);
      try {
        await onSubmit(event);
      } catch (error) {
        runOnError(error);
      }
      setIsProcessing(false);
    }
  };

  return { isProcessing, handleSubmit, FormButton };
}

export default useForm;
