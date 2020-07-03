import React from 'react';
import './readPercentageScale.scss';

function ReadPercentageScale({ percentage, size }) {
  return (
    <div className="read-percentage">
      <div
        className={`read-percentage__scale ${size}`}
        style={{ transform: `translateX(${percentage - 100}%)` }}
      ></div>
    </div>
  );
}

export default ReadPercentageScale;
