import React from 'react';
import classes from './Button.module.scss';

export default ({ type, size, children }) => {
  return (
    <button
      className={`${classes.Button} ${classes[type]} ${
        classes[size] || classes.Default
      }`}
    >
      {children}
    </button>
  );
};
