import React from 'react';
import { ClipLoader, ScaleLoader } from 'react-spinners';
import classes from './Loader.module.scss';

export const Spinner = ({ size }) => {
  return (
    <ClipLoader
      className="loader loader--primary"
      size={size || 25}
      loading={true}
    />
  );
};

export const Scaler = (props) => {
  return <ScaleLoader className="loader loader--primary" loading={true} />;
};

const Loader = ({ brand, message }) => {
  return (
    <div className={` flex ai-center jc-center`} style={{ height: '80vh' }}>
      <div className={classes.LoaderContainer} data-test="LoaderContainer">
        {brand ? (
          <h3 className="brand" data-test="brand">
            {brand}
          </h3>
        ) : null}
      </div>
      <Spinner />
      {message ? <p className={classes.LoaderMessage}>{message}</p> : null}
    </div>
  );
};

export default Loader;
