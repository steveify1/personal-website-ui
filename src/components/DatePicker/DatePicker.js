import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({ disabled, onPicked, className }) {
  const [date, setDate] = useState(new Date());

  const runOnPicked = (date) => {
    if (onPicked && typeof onPicked === 'function') {
      onPicked(date);
    }
  };

  const handleChange = async (value) => {
    await setDate(value);
    runOnPicked(value);
  };

  return (
    <div className={`date-picker ${className ? className : ''}`}>
      <div className="date-picker__wrapper flex jc-center">
        <ReactDatePicker
          selected={date}
          showYearDropdown
          showMonthDropdown
          disabled={disabled}
          onChange={handleChange}
          placeholderText="mm/dd/yyyy"
            inline
        />
      </div>
    </div>
  );
}

export default DatePicker;
