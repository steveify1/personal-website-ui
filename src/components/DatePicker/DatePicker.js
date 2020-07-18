import React, { useState } from 'react';

const attachZero = (value) => (value.length === 1 ? `0${value}` : value);

const currentDate = new Date();
const year = `${currentDate.getFullYear()}`;
const month = `${currentDate.getMonth() + 1}`;
const day = `${currentDate.getDate()}`;

export const today = `${year}-${attachZero(month)}-${attachZero(day)}`;

function DatePicker({ disabled, onPicked }) {
  const [date, setDate] = useState(today);

  const runOnPicked = () => {
    if (onPicked && typeof onPicked === 'function') {
      onPicked(date);
    }
  };

  const handleChange = ({ currentTarget: { value } }) => {
    setDate(value);
    runOnPicked();
  };

  return (
    <div className="date-picker">
      <div className="date-picker__wrapper">
        <input
          className="form-control"
          type="date"
          defaultValue={date}
          disabled={disabled}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default DatePicker;
